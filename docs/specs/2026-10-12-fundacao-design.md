# Fundação técnica, Cadastro, Login e Home — design

Data: 12/10/2026
Responsável: Marcelo Henrique Germiniani Panho
Branch: `feat/fundacao` (criada a partir de `docs/papeis-moderador`)

Este documento registra o design aprovado para a primeira entrega de código do ConectaCC. Ele aplica as decisões de `stack-e-decisoes-tecnicas.md` e `decisoes.md` (inclusive as seções 51 e 52) e registra as escolhas tomadas ao longo da conversa de definição.

## 1. Objetivo e escopo

Montar a base do projeto (ambiente Docker, CI/CD, imagem de produção) e entregar, funcionando de ponta a ponta, o Cadastro, o Login, o Logout e a Home com o layout global.

A entrega valida a pilha inteira: Docker, Postgres, Sanctum com cookie na mesma origem, cliente gerado do OpenAPI, CI e build da imagem de produção.

### Entra

- Ambiente de desenvolvimento com `docker compose up`.
- Imagem Docker de produção, `render.yaml` e workflows de CI, deploy e promoção de papel.
- Cadastro com Termos de participação v0.1 e validação do domínio institucional.
- Login, Logout e `GET /me`.
- Três papéis (ALUNO, MODERADOR e ADMINISTRADOR) no banco, na API e na navegação.
- Layout global (sidebar, header, drawer mobile) e Home.
- Páginas "Em construção" para as demais áreas.
- Sentry desligado enquanto não houver DSN.
- Atualização da documentação.

### Não entra

- Recuperação de senha (opcional pela seção 52.9). O link "Esqueci minha senha" **não aparece** no Login até a recuperação ser implementada.
- Card "Complete seu perfil" (depende de disciplinas atuais, que ainda não existem).
- Badge e painel de notificações (o sino aparece só como ícone).
- Telas reais de Estudos, Oportunidade, Comunidade, Perfil, Configurações e Moderação.
- Painel Filament em `/admin` (o Filament 5 será instalado na etapa do painel).
- Backup (`pg_dump`), que entra quando existir banco de produção.
- Vitest e Playwright, adotados depois da liberação (decisão 11 da stack).
- Dependabot e publicação da imagem em registry.

## 2. Versões

| Componente | Versão |
|---|---|
| PHP | 8.4 (Docker e CI) |
| Laravel | 13 |
| Node | 24 LTS |
| Gerenciador JS | npm |
| PostgreSQL | 17 (igual ao Neon) |
| React / Vite / Tailwind | versões estáveis atuais (19 / 8 / 4) |
| Larastan | nível 6 |

## 3. Estrutura do repositório

```
Conecta-CC/
├── compose.yaml          ambiente de desenvolvimento
├── Makefile              comandos do dia a dia
├── Dockerfile            imagem de produção
├── render.yaml           Blueprint do Render
├── docker/sail/8.4/      runtime do Sail publicado (sail:publish)
├── backend/              Laravel 13
├── frontend/             Vite + React + TypeScript
├── docs/                 documentação (inclui operacao.md e specs/)
├── design/
└── .github/workflows/    ci.yml, deploy.yml, promote-user.yml
```

## 4. Ambiente de desenvolvimento

`compose.yaml` na raiz. Um clone novo sobe com `docker compose up`, sem PHP, Composer ou Node na máquina.

| Serviço | Imagem | Porta | Função |
|---|---|---|---|
| `app` | runtime Sail PHP 8.4 (build local de `docker/sail/8.4`) | 8000 | Laravel (`php artisan serve`) |
| `pgsql` | `postgres:17` | 5432 | banco de desenvolvimento; cria também o banco `testing` |
| `mailpit` | `axllent/mailpit` | 8025 (interface) | captura de e-mails |
| `frontend` | `node:24` | 5173 | `vite dev` com proxy de `/api`, `/sanctum` e `/up` para `app:8000` |

- O navegador usa somente `http://localhost:5173`. Uma única origem, como em produção, sem CORS.
- `vendor/` e `node_modules/` ficam em volumes nomeados dentro dos containers. Quem quiser os tipos no editor roda `npm install` também no host.
- O `vendor/bin/sail` continua funcionando para quem preferir.

`Makefile`:

| Alvo | Ação |
|---|---|
| `make up` / `make down` | sobe ou derruba o ambiente |
| `make migrate` | migrations + seeders de desenvolvimento |
| `make test` | Pest |
| `make lint` | Pint, Larastan, ESLint e `tsc` |
| `make api-types` | exporta o OpenAPI e regenera `frontend/src/lib/api/schema.d.ts` |

## 5. Produção

### Dockerfile multiestágio

1. `node:24-alpine`: `npm ci` e `vite build` do `frontend/`.
2. `composer:2`: `composer install --no-dev --optimize-autoloader` do `backend/`.
3. Runtime `serversideup/php:8.4-fpm-nginx`: recebe o backend e a SPA compilada em `backend/public/spa/`.

Na inicialização do container: `migrate --force`, `config:cache`, `route:cache` e `view:cache`, usando os ganchos de inicialização da imagem. O container roda sem root. Healthcheck em `/up`.

O Laravel tem uma rota de fallback que devolve `public/spa/index.html` para qualquer caminho que não seja `/api`, `/sanctum`, `/up` ou `/admin`.

### Render

`render.yaml` declara um web service Docker no plano free, com `healthCheckPath: /up` e as variáveis de ambiente sem valor (`sync: false`). O Render faz o build pelo próprio Dockerfile.

Variáveis de ambiente de produção: `APP_KEY`, `APP_URL`, `DB_URL` (Neon), `SESSION_DOMAIN`, `SANCTUM_STATEFUL_DOMAINS`, `ALLOWED_EMAIL_DOMAINS`, `SENTRY_LARAVEL_DSN`, `VITE_SENTRY_DSN` (no build) e as de e-mail, quando houver uso.

## 6. CI/CD

### `ci.yml`

Roda em todo pull request e em todo push na `main`. Jobs em paralelo:

| Job | Etapas |
|---|---|
| `backend` | PHP 8.4, `composer install` com cache, `pint --test`, `phpstan` (Larastan nível 6), `pest` com serviço `postgres:17` |
| `frontend` | Node 24, `npm ci` com cache, `eslint` (com `jsx-a11y`), `tsc --noEmit`, `vite build`, verificação de que `schema.d.ts` está atualizado em relação ao OpenAPI |
| `docker` | build do `Dockerfile` de produção, sem push |
| `gitleaks` | varredura de segredos no histórico do PR |

### `deploy.yml`

Roda quando o `ci.yml` termina com sucesso na `main`. Se o secret `RENDER_DEPLOY_HOOK_URL` existir, chama o deploy hook do Render. Se não existir, encerra com aviso, sem falhar.

### `promote-user.yml`

Disparo manual (`workflow_dispatch`) com as entradas `email` e `role`. Roda `php artisan conectacc:promote {email} {role}` no runner, conectado ao Neon pelo secret `DATABASE_URL`. Só quem tem permissão de escrita no repositório consegue disparar; cada execução fica no histórico do Actions.

Uso: criar o primeiro ADMINISTRADOR em produção e servir de plano B caso o painel `/admin` falhe. O Render gratuito não oferece Shell nem SSH.

### Configuração manual do repositório

Feita por um admin do repositório, conforme `docs/operacao.md`:

- Secret scanning e Push protection ativados;
- `main` protegida, exigindo PR com CI verde;
- secrets `RENDER_DEPLOY_HOOK_URL` e `DATABASE_URL`.

## 7. Backend

### Modelo de dados

| Tabela | Colunas | Regras no banco |
|---|---|---|
| `users` | `id`, `name` (Nome completo), `display_name`, `email`, `password`, `role`, `remember_token`, timestamps | `email` único, sempre gravado em minúsculas; `CHECK (role IN ('ALUNO','MODERADOR','ADMINISTRADOR'))`, padrão `ALUNO` |
| `terms_acceptances` | `id`, `user_id` (FK, sem cascade), `version`, `accepted_at` | gravada na mesma transação que o usuário; a FK sem cascade impede apagar o registro do aceite junto com o usuário enquanto a política de exclusão de conta não for definida |
| `sessions` | padrão do Laravel | driver `database` |

### Papéis

- Enum PHP `Role`: `ALUNO`, `MODERADOR`, `ADMINISTRADOR`.
- Gate `access-moderation`: permite MODERADOR e ADMINISTRADOR.
- Não existe herança automática entre papéis; cada permissão é verificada explicitamente (`requisitos.md`, seção 1).
- Toda conta criada pelo Cadastro nasce ALUNO.

### Endpoints

Prefixo `/api/v1`. Autenticação pelo Sanctum em modo SPA (cookie de sessão + CSRF), na mesma origem.

| Método e rota | Entrada | Respostas |
|---|---|---|
| `GET /sanctum/csrf-cookie` | — | 204, define o cookie `XSRF-TOKEN` |
| `GET /api/v1/terms/current` | — | 200 `{version, sections: [{title, body}], acceptance_label}` |
| `POST /api/v1/register` | `name`, `email`, `password`, `password_confirmation`, `terms_version` | 201 sem login automático; 422 com erros por campo; 429 |
| `POST /api/v1/login` | `email`, `password` | 200 com o usuário; 422 com a mensagem geral "E-mail ou senha incorretos."; 429 |
| `POST /api/v1/logout` | — | 204, invalida a sessão e regenera o token CSRF |
| `GET /api/v1/me` | — | 200 `{id, name, display_name, initials, role}`; 401 |

Controllers finos: Form Request → Action (`RegisterUser`, `AuthenticateUser`) → `UserResource`. Scramble publica o OpenAPI em `/docs/api` somente em ambiente local.

### Validação do Cadastro

| Campo | Regra | Mensagem |
|---|---|---|
| `name` | obrigatório, texto, máximo 120, sem espaços nas pontas | "Informe seu nome completo." |
| `email` | obrigatório, e-mail válido | "Informe um endereço de e-mail válido." |
| `email` | domínio exatamente igual a um item de `ALLOWED_EMAIL_DOMAINS`, sem diferenciar maiúsculas | "Use seu e-mail institucional do IFSul." |
| `email` | ainda não cadastrado (comparação em minúsculas) | "Não foi possível criar uma conta com este e-mail. Se você já possui cadastro, entre." |
| `password` | obrigatório, mínimo 8 | "Use pelo menos 8 caracteres." |
| `password_confirmation` | igual a `password` | "As senhas informadas não coincidem." |
| `terms_version` | igual à versão vigente | "Os Termos de participação foram atualizados. Leia e aceite novamente." |

`ALLOWED_EMAIL_DOMAINS` aceita uma lista separada por vírgulas. Valor inicial: `academico.ifsul.edu.br`. A comparação usa o texto depois do último `@`, então `x@academico.ifsul.edu.br.evil.com` é recusado.

Ao criar a conta: `display_name` = `name`, `role` = `ALUNO`, e um registro em `terms_acceptances` com a versão aceita e a data/hora, tudo na mesma transação.

### Termos de participação

O texto fica num arquivo versionado no backend (por exemplo `backend/resources/terms/0.1.json`), com título, seções e frase de aceite. A versão vigente vem de configuração (`TERMS_VERSION=0.1`). Para mudar os Termos, cria-se um arquivo novo e sobe-se a versão, sem alterar o frontend.

O texto da v0.1 é o do protótipo: seções "Sobre o ConectaCC", "Esta é uma versão de testes", "Feedbacks" e "O que outros estudantes podem ver", e a frase "Li e concordo em participar da versão de testes do ConectaCC e estou ciente de que meus feedbacks poderão ser utilizados para o aprimoramento do projeto.". O texto pode ser substituído depois pelo texto final, sem mudança de código.

### Login, sessão e limites

- Mensagem única para e-mail inexistente e senha errada: "E-mail ou senha incorretos." (RF-07).
- O ID da sessão é regenerado no login.
- Limite de tentativas: 5 por minuto por combinação e-mail + IP no Login; 5 por minuto por IP no Cadastro. Ao estourar: 429 com "Muitas tentativas. Tente novamente em X segundos.". Não há bloqueio de conta.
- Sessão no Postgres, válida por 7 dias sem uso (`SESSION_LIFETIME=10080`), renovada a cada acesso e mantida ao fechar o navegador. Não há "Lembrar de mim".
- Cookie `HttpOnly`, `SameSite=Lax` e `Secure` em produção.
- O comportamento das outras sessões ao trocar a senha será definido na etapa de Configurações.

### Comando `conectacc:promote`

`php artisan conectacc:promote {email} {role}`. Altera o papel de um usuário existente. Recusa papel inválido e e-mail inexistente com mensagem clara e código de saída diferente de zero.

### Seeders

Somente em desenvolvimento e teste; nunca em produção.

| E-mail | Papel | Senha |
|---|---|---|
| `aluno@academico.ifsul.edu.br` | ALUNO | `password` |
| `moderador@academico.ifsul.edu.br` | MODERADOR | `password` |
| `moderador2@academico.ifsul.edu.br` | MODERADOR | `password` |
| `admin@academico.ifsul.edu.br` | ADMINISTRADOR | `password` |

### Sentry

`sentry/sentry-laravel`, ativo apenas se `SENTRY_LARAVEL_DSN` estiver definido. `send_default_pii` desligado; usuário identificado só pelo ID interno; sem e-mail, nome ou corpo das requisições (decisão 8 da stack).

## 8. Frontend

### Estrutura de `frontend/src/`

```
app/          router.tsx, providers.tsx (QueryClient, Sentry)
lib/api/      client.ts (openapi-fetch: credentials + X-XSRF-TOKEN), schema.d.ts (gerado)
features/
  auth/       AuthLayout, LoginPage, RegisterPage, TermsDialog, hooks
  home/       HomePage, ConnectionGraph
components/
  layout/     AppLayout, Sidebar, Header, MobileDrawer, UserAvatar
  ui/         componentes shadcn (button, input, label, checkbox, dialog, sheet, alert, skeleton)
pages/        UnderConstructionPage
styles/       tokens da identidade visual
```

### Rotas

| Rota | Acesso | Conteúdo |
|---|---|---|
| `/` | — | redireciona para `/home` (logado) ou `/login` |
| `/login` | só deslogado; logado vai para `/home` (RF-08) | Login |
| `/cadastro` | só deslogado; logado vai para `/home` | Cadastro |
| `/home` | logado | Home |
| `/estudos`, `/oportunidade`, `/comunidade`, `/perfil`, `/configuracoes` | logado | "Em construção" dentro do layout |
| `/moderacao` | MODERADOR e ADMINISTRADOR; outros vão para `/home` | "Em construção" dentro do layout |

### Identidade visual

- Tailwind v4 com tokens de `identidade-visual.md`: `#071F43`, `#0D1933`, `#2259B9`, `#4D84CF`, `#A3C5F2`, `#EEF7FC`, além de verde, vermelho e âmbar semânticos. Os componentes shadcn usam esses tokens.
- Fontes auto-hospedadas por `@fontsource-variable`: **Plus Jakarta Sans** em títulos e marca; **Inter** no corpo, labels e botões. Sem chamada ao Google Fonts.
- Ícones `lucide-react`.
- Sem modo escuro.
- Marca: "Conecta" claro + "CC" em `#A3C5F2` sobre fundo escuro; "Conecta" escuro + "CC" em `#2259B9` sobre fundo claro (header mobile).

### Telas de autenticação

Referência: protótipo (Login: padrão, preenchido, carregando, erro de validação, credenciais incorretas, falha de conexão, conta criada; Cadastro: padrão, erro de validação, domínio fora, e-mail já cadastrado, Termos, Termos aceitos, criando conta; versões mobile).

Desktop (≥ 1024px): painel escuro à esquerda (marca, linha "REDE DE APOIO, OPORTUNIDADES E CONHECIMENTO", título "CONHECIMENTO, CONEXÕES E OPORTUNIDADES.", texto de apoio, rodapé "Ciência da Computação / IFSul | Câmpus Passo Fundo", arcos discretos) e formulário à direita em azul-gelo, com a lista "CONEXÃO / CONHECIMENTO / OPORTUNIDADES / COMUNIDADE" no canto superior direito.

Mobile (< 1024px): faixa azul-marinho no topo com marca, linha de apoio e título reduzido; formulário em largura total abaixo; rodapé institucional centralizado em cinza no fim. A lista do canto não aparece.

Login:
- Título "Bem-vindo(a) de volta", subtítulo "Entre para continuar no ConectaCC.".
- Campos E-mail institucional (placeholder "seuemail@...") e Senha com botão de mostrar/ocultar.
- Botão "Entrar"; rodapé "Ainda não tem uma conta? Cadastre-se".
- Sem "Esqueci minha senha".

Cadastro:
- Título "Crie sua conta", subtítulo "Use seu e-mail institucional para participar da versão de testes do ConectaCC.".
- Campos Nome completo (ajuda: "Também será seu nome de exibição inicial. Você pode alterá-lo no Perfil."), E-mail institucional, Senha (ajuda: "Use pelo menos 8 caracteres."), Confirmar senha.
- "Criar minha conta" valida o formulário e, se estiver válido, abre o modal dos Termos.
- Rodapé "Já tem uma conta? Entrar".
- O erro de e-mail duplicado tem a palavra "entre" como link para `/login`.

Modal dos Termos:
- Título "Termos de participação na versão de testes", selo "Versão 0.1 do termo", texto com rolagem interna, rodapé fixo.
- Checkbox com a frase de aceite à esquerda. As imagens do protótipo não mostram o checkbox; o fluxo de `fluxos.md` ("marcar aceite") e o botão desabilitado indicam que ele existe.
- "Concordar e criar conta" desabilitado até o checkbox ser marcado; durante o envio, "Criando conta..." com spinner.
- "Voltar" e "×" fecham o modal mantendo o formulário preenchido.
- Desktop: botões lado a lado (Voltar, Concordar). Mobile: empilhados (Concordar em cima, Voltar embaixo).
- Se o envio voltar com erros de campo (422), o modal fecha e os erros aparecem no formulário.

### Estados e erros

| Situação | Comportamento |
|---|---|
| Campo inválido (validação no front) | erro abaixo do campo, com ícone; valida ao enviar e, depois disso, enquanto o usuário digita |
| 422 no Cadastro | erros do servidor aplicados aos campos (React Hook Form `setError`) |
| 422 no Login | alerta vermelho "E-mail ou senha incorretos."; campo Senha limpo e com foco |
| 429 | alerta vermelho "Muitas tentativas. Tente novamente em X segundos." (estado novo, no padrão do alerta de credenciais) |
| Falha de rede | alerta vermelho "Não foi possível conectar ao ConectaCC. Verifique sua conexão e tente novamente." com "Tentar novamente", que reenvia sem perder o que foi digitado |
| Enviando | botão desabilitado com spinner e "Entrando..." ou "Criando conta..." |
| Cadastro concluído | navega para `/login` com alerta verde "Conta criada. Entre com seu e-mail e senha.", e-mail preenchido e foco na Senha |
| `/me` carregando | skeleton do avatar e nome no header e da saudação |
| `/me` falha (exceto 401) | faixa âmbar "Não foi possível carregar algumas informações agora. Tente novamente." com "Tentar novamente" |
| 401 em qualquer chamada | limpa o cache e navega para `/login` |

### Layout global e Home

Referência: protótipo da Home (desktop: primeiro acesso, perfil completo, ADMIN com Moderação, loading, erro parcial; mobile: Home e menu aberto).

- **Sidebar (desktop)**: azul-marinho, marca no topo com detalhe de conexão. Itens Home, Estudos, Oportunidade, Comunidade, Perfil. Para MODERADOR e ADMINISTRADOR, um grupo separado com Moderação. Grupo inferior com Configurações e Sair. O item ativo tem fundo, barra lateral e texto em destaque, além de `aria-current="page"`.
- **Header (desktop)**: branco, sino (só ícone), avatar de iniciais e Nome de exibição.
- **Mobile**: header branco com botão de menu, marca, sino e avatar (sem nome). O drawer azul-marinho abre sobre um fundo escurecido, com marca, botão fechar e os mesmos itens da sidebar.
- **Iniciais**: primeira letra do primeiro nome + primeira letra do último nome do Nome de exibição; um nome só gera uma letra.
- **Sair**: chama `POST /logout`, limpa o cache e navega para `/login`.
- **Home**:
  - "Olá, {primeiro nome do Nome de exibição}! 👋" e "Boas-vindas ao ConectaCC.";
  - card "Conecte-se, aprenda e cresça junto com a comunidade." com texto de apoio e grafo em SVG (o grafo some no mobile);
  - "Acesso rápido" com os cards Estudos ("Ir para Estudos"), Oportunidade ("Ver oportunidades"), Comunidade ("Explorar Comunidade") e Perfil ("Ver perfil"), em 4 colunas no desktop e 1 coluna no mobile, levando às páginas "Em construção".
- **Página "Em construção"**: título da área e o texto "Esta área ainda está em construção.", com link para a Home.

### Acessibilidade

- Labels reais em todos os campos.
- `aria-invalid` e `aria-describedby` ligando cada campo à sua mensagem de erro e de ajuda.
- Alertas com `role="alert"`; foco no primeiro campo com erro.
- Botão de olho com rótulo "Mostrar senha" / "Ocultar senha".
- Foco visível em `#4D84CF`.
- Modal e drawer com foco preso e retorno do foco ao fechar (Radix).
- Estados que não dependem só de cor (ícone + texto nos alertas e erros).
- Alvos de toque de pelo menos 44px no mobile.

### Sentry

`@sentry/react`, ativo apenas se `VITE_SENTRY_DSN` estiver definido no build; sem PII.

## 9. Testes

### Pest (contra PostgreSQL real, local e no CI)

- **Cadastro**: cria conta com papel ALUNO e `display_name` = `name`; grava o aceite com versão e data/hora; recusa domínio fora da lista (inclusive `...edu.br.evil.com`) e aceita maiúsculas no domínio; recusa senha curta, confirmação diferente, Termos ausentes ou com versão errada; devolve a mensagem da 51.4 para e-mail duplicado, inclusive com maiúsculas diferentes; não deixa usuário nem aceite gravados quando a criação falha; aplica o limite de 5 por minuto.
- **Termos**: `GET /terms/current` devolve a versão vigente e o texto.
- **Login**: autentica com credenciais certas; devolve a mesma mensagem para e-mail inexistente e senha errada; 429 na 6ª tentativa; regenera a sessão.
- **Logout e `/me`**: logout invalida a sessão; `/me` devolve 401 sem sessão e os dados certos com sessão.
- **Papéis**: Gate `access-moderation` libera MODERADOR e ADMINISTRADOR e nega ALUNO; o banco recusa papel fora da lista.
- **`conectacc:promote`**: promove usuário existente; recusa papel inválido; recusa e-mail inexistente.

### Frontend

ESLint (com `jsx-a11y`), `tsc` e build no CI. Antes de considerar a entrega pronta, o fluxo Cadastro → Login → Home → navegação → Sair é testado manualmente no navegador, no desktop e no mobile, incluindo os estados de erro.

## 10. Documentação a atualizar

| Arquivo | Alteração |
|---|---|
| `docs/implementacao.md` | marcar os itens entregues da Fundação e da Autenticação; registrar limite de tentativas, sessão de 7 dias, papéis como enum + Gate, aceite na mesma transação e `conectacc:promote` |
| `docs/pendencias.md` | 2.6 resolvida; 2.5 parcialmente resolvida (política de sessão); domínio `academico.ifsul.edu.br` registrado |
| `docs/stack-e-decisoes-tecnicas.md` | versões (PHP 8.4, Laravel 13, Node 24, Postgres 17), runtime `serversideup/php`, Larastan nível 6, gitleaks, fontes auto-hospedadas, workflow `promote-user` |
| `docs/identidade-visual.md` §7 | Plus Jakarta Sans (títulos) + Inter (corpo) como decisão registrada |
| `docs/operacao.md` (novo) | subir o ambiente; comandos do Makefile; variáveis de ambiente; criação das contas do Render, Neon e Sentry; secrets; ativação do secret scanning e da proteção da `main`; uso do `promote-user` |
| `README.md` | seção "Desenvolvimento" apontando para `docs/operacao.md` |

## 11. Fluxo de Git

- Trabalho na branch `feat/fundacao`, com commits pequenos em Conventional Commits (`chore:`, `feat:`, `ci:`, `docs:`, `test:`).
- Sem push e sem PR até pedido explícito.
- Quando `docs/papeis-moderador` for mergeada na `main`, a `feat/fundacao` é rebaseada sobre a `main`.

## 12. Critérios de aceite

1. Em um clone novo, `docker compose up` seguido de `make migrate` deixa o app acessível em `http://localhost:5173`.
2. Uma conta `@academico.ifsul.edu.br` é criada pelo Cadastro com aceite dos Termos v0.1 registrado, e entra pelo Login.
3. As contas do seeder entram; MODERADOR e ADMINISTRADOR veem "Moderação"; ALUNO não vê e é redirecionado se acessar `/moderacao`.
4. Todos os estados de erro e carregamento descritos na seção 8 aparecem como no protótipo.
5. Sair encerra a sessão; rotas logadas levam ao Login.
6. `make lint` e `make test` passam; o `ci.yml` passa, inclusive o build da imagem de produção.
7. A imagem de produção sobe localmente, roda as migrations e responde em `/up` e na SPA.
