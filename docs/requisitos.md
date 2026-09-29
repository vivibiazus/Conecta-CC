# Requisitos do MVP — ConectaCC

Este documento registra os principais requisitos funcionais e regras de negócio do MVP do ConectaCC.

O objetivo é servir como referência para:

- implementação;
- testes;
- revisão funcional;
- validação do produto.

Os requisitos descritos aqui representam decisões de produto e não definem, por si só, a tecnologia que deverá ser utilizada.

---

# 1. Papéis de usuário

O MVP possui dois papéis principais:

- ALUNO
- ADMIN

## 1.1 ALUNO

O usuário ALUNO pode:

- criar conta;
- realizar Login;
- recuperar senha;
- acessar Home;
- editar o próprio Perfil;
- acessar Estudos;
- acessar Oportunidade;
- acessar Comunidade;
- consultar Perfis públicos;
- acessar Configurações;
- receber notificações;
- enviar conteúdos para análise.

O usuário ALUNO não pode:

- acessar a área de Moderação;
- consultar conteúdos pendentes de outros usuários;
- aprovar conteúdos;
- rejeitar conteúdos.

## 1.2 ADMIN

O ADMIN possui as funcionalidades comuns de usuário e também pode:

- acessar Moderação;
- consultar conteúdos pendentes;
- aprovar conteúdos;
- rejeitar conteúdos;
- informar motivo opcional da rejeição.

O ADMIN não pode moderar o próprio conteúdo.

---

# 2. Cadastro

## RF-01 — Criar conta

O sistema deve permitir o cadastro de um novo usuário.

Campos:

- Nome completo;
- E-mail institucional;
- Senha;
- Confirmar senha.

## RF-02 — Nome de exibição inicial

Ao criar a conta, o Nome completo deve ser utilizado inicialmente como Nome de exibição.

O usuário poderá alterar o Nome de exibição posteriormente no Perfil.

## RF-03 — Validação de senha

A senha deve possuir no mínimo:

**8 caracteres**

A confirmação deve ser igual à senha.

Não existem no MVP regras obrigatórias adicionais de:

- letra maiúscula;
- número;
- símbolo.

## RF-04 — Termos de participação

O cadastro só pode ser concluído depois que o usuário aceitar os Termos de participação.

O aceite deve possuir:

- versão;
- data/hora;
- usuário relacionado.

O aceite só deve ser registrado quando a conta for efetivamente criada.

## RF-05 — Domínio institucional

Enquanto os domínios institucionais não estiverem oficialmente confirmados, o protótipo valida somente o formato do e-mail.

Na implementação definitiva, os domínios aceitos deverão ser definidos antes do piloto.

---

# 3. Login

## RF-06 — Autenticação

O usuário deve conseguir entrar utilizando:

- E-mail institucional;
- Senha.

## RF-07 — Credenciais inválidas

Em caso de falha de autenticação, utilizar mensagem genérica:

**E-mail ou senha incorretos.**

O sistema não deve revelar desnecessariamente qual credencial estava incorreta.

## RF-08 — Usuário autenticado

Usuário autenticado que acessar a tela de Login poderá ser redirecionado para a Home.

---

# 4. Recuperação de senha

## RF-09 — Solicitar recuperação

O usuário deve poder solicitar recuperação utilizando o E-mail institucional.

## RF-10 — Resposta genérica

Depois da solicitação, o sistema não deve confirmar se existe uma conta associada ao e-mail.

Exemplo:

**Se existir uma conta associada ao e-mail informado, enviaremos as instruções para redefinir sua senha.**

## RF-11 — Link de recuperação

A definição de nova senha deve ocorrer através de link recebido por e-mail.

A tela de nova senha não faz parte da navegação comum da aplicação.

## RF-12 — Nova senha

A nova senha deve possuir:

- mínimo de 8 caracteres;
- confirmação igual.

A política técnica do link de recuperação ainda deverá ser definida.

---

# 5. Home

## RF-13 — Home autenticada

Depois do Login, o usuário deve acessar a Home.

## RF-14 — Saudação

A Home deve apresentar saudação utilizando o Nome de exibição.

## RF-15 — Atalhos

A Home deve oferecer acesso às principais áreas:

- Estudos;
- Oportunidade;
- Comunidade;
- Perfil.

## RF-16 — Perfil incompleto

O Perfil é considerado completo quando possui:

- Nome de exibição;
- pelo menos uma disciplina atual.

Enquanto estiver incompleto, a Home deve apresentar:

**Complete seu perfil**

## RF-17 — Perfil completo

Depois que o Perfil estiver completo:

- o card “Complete seu perfil” deve desaparecer;
- não deve ser substituído por gamificação ou percentual de completude.

---

# 6. Perfil

## RF-18 — Visualizar Perfil

O usuário deve conseguir consultar o próprio Perfil.

## RF-19 — Editar Perfil

O usuário deve conseguir editar:

- Nome de exibição;
- Semestre;
- Disciplinas atuais;
- Sobre mim;
- Interesses;
- Posso ajudar com;
- Procuro ajuda com;
- GitHub;
- LinkedIn.

## RF-20 — Campos obrigatórios

Para considerar o Perfil completo:

- Nome de exibição é obrigatório;
- pelo menos uma disciplina atual é obrigatória.

Os demais campos são opcionais.

## RF-21 — Curso

No MVP, o curso é:

**Ciência da Computação**

Não existe seleção de curso no Perfil.

## RF-22 — Avatar

O avatar deve utilizar iniciais do Nome de exibição.

No MVP não existe upload de foto.

## RF-23 — GitHub

Quando preenchido:

- deve utilizar endereço correspondente ao GitHub;
- deve abrir em nova guia na visualização pública.

## RF-24 — LinkedIn

Quando preenchido:

- deve utilizar endereço correspondente ao LinkedIn;
- deve abrir em nova guia na visualização pública.

## RF-25 — Alterações não salvas

Ao tentar sair com alterações ainda não salvas, o usuário deve receber confirmação antes de descartá-las.

---

# 7. Disciplinas atuais

## RF-26 — Seleção

O usuário deve conseguir selecionar as disciplinas que cursa atualmente.

## RF-27 — Integração com Estudos

As disciplinas selecionadas devem alimentar:

**Minhas disciplinas**

na área Estudos.

## RF-28 — Visibilidade

As disciplinas atuais podem ser vistas por outros estudantes autenticados no Perfil público.

Essa regra deverá estar explicitamente indicada nos Termos antes do piloto real.

---

# 8. Estudos

## RF-29 — Acessar Estudos

O usuário autenticado deve conseguir acessar Estudos.

## RF-30 — Minhas disciplinas

A seção deve apresentar as disciplinas atuais selecionadas no Perfil.

## RF-31 — Todas as disciplinas

O sistema deve possuir catálogo das disciplinas confirmadas do curso.

O catálogo oficial será definido a partir de fonte institucional.

## RF-32 — Busca de disciplina

O usuário deve conseguir pesquisar disciplinas pelo nome.

## RF-33 — Página da disciplina

Uma disciplina pode possuir:

- informações básicas;
- link para ementa oficial;
- materiais aprovados.

O link oficial só deve aparecer como link funcional quando a URL estiver confirmada.

## RF-34 — Disciplina sem materiais

Se uma disciplina ainda não possuir área de materiais:

- deve continuar acessível;
- não deve oferecer envio de material;
- pode apresentar informação oficial quando disponível.

---

# 9. Materiais

## RF-35 — Compartilhar material

Em disciplinas habilitadas, o usuário deve poder compartilhar material.

Campos:

- Título;
- Descrição opcional;
- Link.

## RF-36 — Material por link

No MVP, materiais são enviados exclusivamente por link.

Não existe upload de arquivo.

## RF-37 — Disciplina do material

O material deve permanecer relacionado à disciplina a partir da qual foi enviado.

O usuário não deve alterar essa disciplina no formulário.

## RF-38 — Moderação

Material enviado deve iniciar com status:

**PENDENTE**

Só pode aparecer publicamente depois de:

**APROVADO**

## RF-39 — Autoria pública

No protótipo atual, materiais aparecem como:

**Compartilhado pela comunidade**

O ADMIN continua identificando o autor.

A regra definitiva de anonimato público será validada posteriormente.

---

# 10. Oportunidade

## RF-40 — Fontes

A área deve separar:

- Oportunidades do IFSul;
- Oportunidades indicadas pela comunidade.

## RF-41 — Recursos institucionais

Recursos institucionais só devem possuir links clicáveis depois da confirmação da URL.

## RF-42 — Indicar oportunidade

O usuário pode enviar oportunidade com:

- Título;
- Tipo;
- Descrição opcional;
- Link.

## RF-43 — Tipos

Tipos iniciais:

- Estágio;
- Emprego;
- Evento;
- Projeto;
- Outro.

## RF-44 — Moderação

Oportunidade enviada deve ficar PENDENTE até análise do ADMIN.

## RF-45 — Data pública

Depois da aprovação, a referência pública deve considerar data de aprovação/publicação.

---

# 11. Comunidade

## RF-46 — Estrutura

A Comunidade deve possuir:

- O que está rolando;
- Encontre estudantes;
- Conecte-se com a comunidade.

## RF-47 — Feed

O feed deve utilizar ordem cronológica.

Não deve possuir no MVP:

- curtidas;
- comentários;
- seguidores;
- ranking;
- algoritmo de recomendação.

## RF-48 — Publicação

O usuário deve poder compartilhar:

- Título;
- Descrição;
- Link.

A publicação deve passar por Moderação.

## RF-49 — Material no feed

Novo material aprovado pode aparecer no feed.

Ao acessar:

→ abrir a disciplina correspondente em Estudos.

---

# 12. Busca de estudantes

## RF-50 — Campos pesquisáveis

A busca pode considerar:

- Nome de exibição;
- Interesses;
- Pode ajudar com;
- Procura ajuda com;
- Disciplinas atuais.

## RF-51 — Próprio usuário

O usuário autenticado não deve aparecer nos próprios resultados da Comunidade.

## RF-52 — Ordem

Sem critério de busca que altere a listagem, estudantes devem ser apresentados em ordem alfabética.

## RF-53 — Disciplina atual

Quando um estudante for localizado por disciplina atual:

deve aparecer como:

**Cursa atualmente**

Isso não significa que ele marcou:

**Pode ajudar com**

---

# 13. Perfil público

## RF-54 — Acesso

Perfis públicos são visíveis somente para usuários autenticados do ConectaCC.

## RF-55 — Dados permitidos

Podem aparecer:

- avatar;
- Nome de exibição;
- Curso;
- Semestre;
- Sobre;
- Interesses;
- Pode ajudar com;
- Procura ajuda com;
- Disciplinas atuais;
- GitHub;
- LinkedIn.

## RF-56 — Dados proibidos

Não exibir:

- e-mail institucional;
- Nome completo da conta quando diferente do Nome de exibição;
- dados de autenticação;
- dados administrativos.

## RF-57 — Campos vazios

Campos opcionais vazios devem ser omitidos.

---

# 14. Configurações

## RF-58 — Conta

Configurações deve exibir:

- E-mail institucional em modo somente leitura.

## RF-59 — Alterar senha

Usuário autenticado deve poder alterar a senha informando:

- Senha atual;
- Nova senha;
- Confirmar nova senha.

## RF-60 — Validação da nova senha

A nova senha deve possuir:

- mínimo de 8 caracteres;
- confirmação igual.

## RF-61 — Exclusão da conta

Exclusão automática de conta não faz parte da interface do MVP atual.

A política deverá ser definida antes do piloto.

---

# 15. Notificações

## RF-62 — Origem

O MVP deve gerar notificações para resultados da Moderação.

Tipos:

- Material aprovado;
- Material rejeitado;
- Publicação aprovada;
- Publicação rejeitada;
- Oportunidade aprovada;
- Oportunidade rejeitada.

## RF-63 — Motivo

Quando houver motivo de rejeição, ele pode aparecer na notificação.

## RF-64 — Badge

O sino deve indicar quantidade de notificações não lidas.

Visualmente:

- 1 a 9;
- 9+ acima desse limite.

## RF-65 — Leitura

Deve existir suporte para:

- marcar como lida;
- marcar todas como lidas.

O comportamento de navegação ao clicar em cada notificação ainda será definido.

---

# 16. Moderação

## RF-66 — Acesso

Somente ADMIN pode acessar Moderação.

## RF-67 — Fila única

A Moderação deve possuir uma fila única para:

- MATERIAL;
- PUBLICAÇÃO;
- OPORTUNIDADE.

## RF-68 — Status

A fila principal mostra conteúdos:

**PENDENTES**

## RF-69 — Ordem

Pendências devem ser ordenadas:

**mais antigas primeiro**

## RF-70 — Filtro

Filtros:

- Todos;
- Material;
- Publicação;
- Oportunidade.

## RF-71 — Análise

O ADMIN pode consultar:

- tipo;
- título;
- descrição;
- autor;
- data do envio;
- link;
- informações específicas do conteúdo.

## RF-72 — Aprovar

ADMIN pode aprovar conteúdo PENDENTE.

Depois:

- status → APROVADO;
- conteúdo sai da fila;
- conteúdo aparece na área correspondente;
- autor recebe notificação.

## RF-73 — Rejeitar

ADMIN pode rejeitar conteúdo PENDENTE.

Motivo:

- opcional.

Depois:

- status → REJEITADO;
- conteúdo sai da fila;
- não é publicado;
- autor recebe notificação.

## RF-74 — Próprio conteúdo

ADMIN não pode Aprovar ou Rejeitar conteúdo de sua própria autoria.

Outro ADMIN deverá realizar a análise.

## RF-75 — Concorrência

Uma segunda decisão não pode sobrescrever a primeira.

Se conteúdo já tiver sido processado:

**Este conteúdo já foi analisado.**

---

# 17. Links externos

## RF-76 — Nova guia

Links externos devem abrir em nova guia.

## RF-77 — Identificação

A interface deve indicar quando o usuário será direcionado para ambiente externo.

## RF-78 — URLs

Somente URLs válidas e seguras devem ser aceitas.

A validação deve ocorrer também no servidor.

---

# 18. Estados gerais

## RF-79 — Loading

Módulos que dependem de carregamento devem possuir estado de loading.

## RF-80 — Erro

Falhas devem apresentar mensagem adequada e permitir nova tentativa quando aplicável.

## RF-81 — Estado vazio

Ausência de dados deve ser diferenciada de erro.

## RF-82 — Busca sem resultado

Busca sem correspondências deve ser diferenciada de lista vazia.

---

# 19. Responsividade

## RNF-01

A aplicação deverá ser utilizável em desktop e dispositivos móveis.

## RNF-02

No mobile, a sidebar poderá ser transformada em drawer.

## RNF-03

Cards, formulários, modais e painéis devem adaptar-se à largura disponível.

---

# 20. Acessibilidade

## RNF-04

Formulários devem possuir labels adequados.

## RNF-05

Estados de foco devem ser visíveis.

## RNF-06

Informações não devem depender somente de cor.

## RNF-07

Mensagens de erro devem estar associadas aos campos correspondentes.

## RNF-08

Modais e painéis devem possuir tratamento adequado de foco.

## RNF-09

Links externos devem ser identificados.

## RNF-10

Loading, erro e sucesso devem possuir feedback compreensível também para tecnologias assistivas.

---

# 21. Fora do escopo do MVP

Não fazem parte da primeira versão:

- chat;
- mensagens diretas;
- comentários;
- curtidas;
- reações;
- seguidores;
- matching;
- pedido de ajuda;
- IA;
- recomendações;
- ranking;
- gamificação;
- upload de materiais;
- upload de fotos;
- candidatura interna;
- CRUD administrativo completo;
- histórico administrativo completo;
- remoção de conteúdo aprovado.

Esses itens poderão ser avaliados posteriormente.
