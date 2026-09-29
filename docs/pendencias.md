# Pendências e decisões em aberto — ConectaCC

Este documento registra decisões que ainda precisam ser tomadas, informações que precisam ser confirmadas e questões que deverão ser resolvidas durante a implementação ou antes do piloto do ConectaCC.

A existência de um item nesta lista não significa que ele deveria estar concluído neste momento.

O objetivo é diferenciar claramente:

- decisões de produto ainda abertas;
- pendências técnicas;
- pendências institucionais;
- requisitos obrigatórios antes do piloto;
- possibilidades de evolução pós-MVP.

---

# 1. Decisões de produto ainda abertas

## 1.1 Informações e Serviços

Ainda precisa ser definido onde o ConectaCC reunirá ou contextualizará acessos como:

- SUAP;
- Moodle;
- Painel de Sistemas do Câmpus;
- Instituto de Informática;
- professores;
- organograma;
- ementas;
- outros serviços e informações institucionais.

Esse conteúdo fazia parte da concepção original do ConectaCC, mas não aparece atualmente como módulo independente na navegação do MVP.

A decisão deverá considerar o princípio:

> O ConectaCC deve conectar e contextualizar recursos existentes, e não reconstruir sistemas institucionais.

**Quando decidir:** antes do piloto.

---

## 1.2 Data pública de materiais e publicações

A área Oportunidade já utiliza como referência pública a data de aprovação/publicação.

Ainda deve ser confirmado se o mesmo padrão será utilizado para:

- materiais em Estudos;
- publicações da Comunidade.

A opção mais coerente é utilizar a data de aprovação/publicação, e não a data original do envio para Moderação.

**Quando decidir:** antes de implementar Estudos e Comunidade.

---

## 1.3 Comportamento das notificações

Ainda deve ser definido o comportamento ao clicar em uma notificação.

Questões:

- abrir uma notificação deve marcá-la automaticamente como lida?
- a notificação deve levar diretamente ao conteúdo correspondente?
- uma notificação de material aprovado deve abrir a disciplina?
- uma notificação de oportunidade aprovada deve abrir Oportunidade?
- uma publicação aprovada deve abrir a Comunidade?

**Quando decidir:** antes da implementação definitiva do sino de notificações.

---

## 1.4 URLs institucionais

Ainda precisam ser confirmados links oficiais para recursos como:

- Estágios;
- Projetos de Extensão;
- ementas;
- grupo de WhatsApp dos estudantes;
- Instagram institucional;
- outros recursos relevantes.

Links não confirmados não devem ser inventados.

**Quando decidir:** antes do piloto.

---

## 1.5 Domínios de e-mail institucional

O protótipo atualmente valida apenas o formato do endereço de e-mail.

Ainda precisam ser confirmados, através de fonte institucional confiável, quais domínios poderão ser utilizados no cadastro.

**Quando decidir:** antes do piloto.

---

## 1.6 Confirmação de e-mail no cadastro

Ainda deve ser decidido se o cadastro exigirá confirmação de propriedade do e-mail institucional.

Sem confirmação, o sistema consegue validar o formato e eventualmente o domínio, mas não consegue garantir que o usuário realmente possui aquele endereço.

A recuperação de senha já dependerá de envio de e-mail, portanto essa infraestrutura deverá ser considerada na decisão técnica.

**Quando decidir:** antes do piloto.

---

## 1.7 Catálogo de disciplinas, semestres e disciplinas piloto

Ainda precisam ser confirmados:

- catálogo oficial de disciplinas;
- matriz curricular utilizada como fonte;
- opções adequadas para o campo Semestre;
- quais disciplinas terão área de materiais inicialmente;
- quais disciplinas participarão do piloto.

Os dados utilizados atualmente no protótipo são demonstrativos.

**Quando decidir:** antes do piloto.

---

## 1.8 Anonimato público dos materiais

No protótipo, materiais aparecem como:

**Compartilhado pela comunidade**

O ADMIN continua identificando o autor para fins de Moderação e notificação.

Ainda deverá ser validado com estudantes se o anonimato público é desejável ou se a autoria deveria ser apresentada.

**Quando decidir:** após os primeiros testes com estudantes.

---

## 1.9 E-mails utilizados nos exemplos do protótipo

O protótipo utiliza diferentes endereços fictícios em algumas telas.

Essa diferença não afeta o funcionamento do produto e é apenas uma questão de acabamento visual.

Pode ser padronizada futuramente.

**Quando decidir:** quando conveniente.

---

# 2. Pendências técnicas de implementação

Estas decisões serão tratadas principalmente durante a definição da arquitetura e implementação.

## 2.1 Stack, banco e hospedagem

Definir:

- stack;
- arquitetura;
- frontend;
- backend;
- banco de dados;
- hospedagem;
- deploy;
- provedor de e-mail.

---

## 2.2 Recuperação de senha

Definir:

- formato do link de recuperação;
- validade do link;
- token;
- segurança;
- provedor responsável pelo envio.

---

## 2.3 Autorização ALUNO e ADMIN

Garantir tecnicamente que:

- somente ADMIN consulte conteúdos pendentes;
- somente ADMIN aprove ou rejeite conteúdos;
- ALUNO não consiga acessar Moderação através de rota direta;
- ADMIN não consiga moderar o próprio conteúdo.

Essa proteção deve existir no backend e no banco, e não apenas na interface.

---

## 2.4 Concorrência na Moderação

Caso dois administradores analisem o mesmo conteúdo:

- a primeira decisão válida deve prevalecer;
- a segunda tentativa não pode sobrescrever a primeira.

O sistema deverá apresentar o estado:

**Este conteúdo já foi analisado.**

---

## 2.5 Sessões após alteração ou recuperação de senha

Definir se outras sessões ativas serão:

- mantidas;
- encerradas.

A decisão deve contemplar:

- alteração autenticada de senha;
- recuperação de senha.

---

## 2.6 Tentativas de Login

Definir futuramente:

- existência ou não de limite de tentativas;
- bloqueio temporário;
- atraso progressivo;
- outras medidas de segurança.

Não existe regra definitiva no protótipo.

---

## 2.7 Limites de texto

Ainda precisam ser definidos limites para campos como:

- Nome de exibição;
- Sobre mim;
- quantidade de tags;
- tamanho das tags;
- título de material;
- descrição de material;
- título de oportunidade;
- descrição de oportunidade;
- título de publicação;
- descrição de publicação;
- motivo da rejeição.

Os limites deverão considerar:

- banco de dados;
- segurança;
- experiência do usuário;
- apresentação dos cards.

---

## 2.8 Quantidade inicial antes de “Mostrar mais”

Definir quantos itens serão exibidos inicialmente em:

- feed da Comunidade;
- lista de estudantes.

Os números atualmente utilizados no protótipo são apenas demonstrativos.

---

## 2.9 Registro versionado dos Termos

O sistema deverá registrar:

- versão do termo aceita;
- usuário;
- data/hora do aceite.

O aceite só deve ser registrado quando a conta for efetivamente criada.

---

## 2.10 Validação de URLs

Na implementação, validar no servidor:

- apenas HTTP e HTTPS;
- normalização adequada para HTTPS;
- links GitHub correspondentes ao domínio GitHub;
- links LinkedIn correspondentes ao domínio LinkedIn.

Não confiar somente na validação do frontend.

---

## 2.11 Foco e alterações não salvas

Implementar corretamente:

- foco preso em modais e painéis;
- retorno de foco;
- navegação por teclado;
- aviso ao fechar a aba quando houver alterações não salvas, quando aplicável.

O protótipo demonstra esses comportamentos apenas parcialmente.

---

## 2.12 Loading e erro

Completar na implementação os estados de loading e erro nas páginas que reutilizam padrões existentes.

Exemplos:

- Perfil;
- Configurações;
- Página da disciplina.

---

## 2.13 Limitações específicas do protótipo

Não tratar como regras do produto:

- persistência entre telas através do armazenamento do navegador;
- papel ADMIN não carregado automaticamente entre todos os artboards;
- dados fictícios utilizados para demonstrar estados.

Essas limitações existem somente na prototipação.

---

# 3. Pendências obrigatórias antes do piloto

## 3.1 Revisar os Termos de participação

Antes do piloto real, revisar o texto para incluir explicitamente:

- disciplinas atuais visíveis para estudantes autenticados;
- tratamento de dados;
- finalidade dos dados;
- informações relevantes sobre o período de testes.

---

## 3.2 Exclusão de conta e dados

Definir:

- como solicitar exclusão;
- quem é responsável pelo processo;
- quais dados serão removidos;
- retenção de dados;
- impacto sobre materiais enviados;
- impacto sobre publicações;
- impacto sobre oportunidades indicadas.

Essa funcionalidade não possui tela automática no MVP atual.

---

## 3.3 Quantidade de administradores

Se usuários ADMIN também participarem do piloto como estudantes, deverá existir mais de um ADMIN.

Isso é necessário porque:

**um ADMIN não pode moderar o próprio conteúdo.**

---

## 3.4 Orientação para motivo de rejeição

Antes do piloto, criar orientação simples para administradores.

O motivo deve ser:

- objetivo;
- compreensível;
- explicativo quando necessário;
- respeitoso;
- sem informações inadequadas ou desnecessárias.

O limite de caracteres será definido durante a implementação.

---

# 4. Recursos institucionais a mapear

Ainda deverá ser realizado um levantamento mais completo de recursos relevantes.

Entre eles:

- [ ] SUAP
- [ ] Moodle
- [ ] Painel de Sistemas do Câmpus
- [ ] site do Instituto de Informática
- [ ] professores
- [ ] organograma
- [ ] ementas
- [ ] Estágios
- [ ] Projetos de Extensão
- [ ] Instagram institucional
- [ ] grupo de WhatsApp dos estudantes
- [x] Arena Games
- [ ] outros recursos identificados durante o levantamento

Para cada recurso deverá ser registrado:

- nome;
- finalidade;
- URL;
- fonte;
- área do ConectaCC em que será utilizado.

---

# 5. Preparação da validação

Antes dos testes com estudantes:

- [ ] escolher disciplinas piloto;
- [ ] definir participantes;
- [ ] revisar Termos;
- [ ] confirmar links institucionais;
- [ ] preparar formulário ou instrumento de feedback;
- [ ] definir o que será observado durante os testes;
- [ ] preparar ambiente funcional;
- [ ] definir administradores do piloto.

---

# 6. Pós-MVP

Itens já identificados como possíveis evoluções e que não fazem parte da primeira versão:

- prevenção automática de conteúdo duplicado;
- aviso de link já compartilhado;
- remoção de conteúdo já aprovado;
- histórico administrativo;
- auditoria de decisões;
- contador de pendências na Moderação;
- controle de visibilidade do Perfil;
- opção de não aparecer na Comunidade;
- pedido de ajuda;
- matching entre estudantes;
- chat;
- mensagens diretas;
- upload de arquivos;
- upload de foto;
- comentários;
- curtidas;
- reações;
- seguidores;
- recomendações;
- Inteligência Artificial;
- gamificação.

---

# 7. Observação

A auditoria final do protótipo identificou que as áreas principais estão consistentes para servir como referência de implementação.

As pendências registradas neste documento representam principalmente:

- decisões ainda não necessárias para o protótipo;
- informações institucionais ainda não confirmadas;
- escolhas técnicas da implementação;
- requisitos necessários antes do piloto.

Portanto, elas não devem ser interpretadas como falhas ou esquecimentos do projeto.
