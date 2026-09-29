# Status do MVP — ConectaCC

Última atualização: 28/09/2026

Este documento apresenta o estado atual do MVP do ConectaCC.

A intenção é diferenciar claramente o que já foi definido e prototipado do que ainda precisa ser implementado e validado.

---

## Legenda

- ✅ **Definido** — requisitos e regras principais já foram estabelecidos.
- 🎨 **Prototipado** — existe representação visual e fluxo navegável.
- 💻 **Implementado** — existe código funcional.
- 🧪 **Validado** — foi submetido ao processo de teste ou validação previsto.
- ⏳ **Pendente** — ainda precisa ser realizado.

---

## Visão geral

| Funcionalidade | Definido | Prototipado | Implementado | Validado |
|---|---|---|---|---|
| Identidade visual | ✅ | ✅ | ⏳ | ⏳ |
| Login | ✅ | ✅ | ⏳ | ⏳ |
| Cadastro | ✅ | ✅ | ⏳ | ⏳ |
| Termos de participação | ✅ | ✅ | ⏳ | ⏳ |
| Recuperação de senha | ✅ | ✅ | ⏳ | ⏳ |
| Home | ✅ | ✅ | ⏳ | ⏳ |
| Perfil | ✅ | ✅ | ⏳ | ⏳ |
| Estudos | ✅ | ✅ | ⏳ | ⏳ |
| Página da disciplina | ✅ | ✅ | ⏳ | ⏳ |
| Compartilhamento de material | ✅ | ✅ | ⏳ | ⏳ |
| Oportunidade | ✅ | ✅ | ⏳ | ⏳ |
| Indicação de oportunidade | ✅ | ✅ | ⏳ | ⏳ |
| Comunidade | ✅ | ✅ | ⏳ | ⏳ |
| Perfil público | ✅ | ✅ | ⏳ | ⏳ |
| Compartilhamento na Comunidade | ✅ | ✅ | ⏳ | ⏳ |
| Busca de estudantes | ✅ | ✅ | ⏳ | ⏳ |
| Configurações | ✅ | ✅ | ⏳ | ⏳ |
| Notificações | ✅ | ✅ | ⏳ | ⏳ |
| Moderação ADMIN | ✅ | ✅ | ⏳ | ⏳ |
| Responsividade | ✅ | ✅ | ⏳ | ⏳ |
| Acessibilidade | ✅ | Considerada no protótipo | ⏳ | ⏳ |
| Testes com estudantes | Planejado | — | — | ⏳ |

---

# Situação atual

As dez áreas principais do MVP já foram prototipadas e congeladas:

1. Login
2. Cadastro + Termos
3. Recuperação de senha
4. Home
5. Perfil
6. Estudos
7. Oportunidade
8. Comunidade + Perfil público
9. Configurações
10. Moderação — ADMIN

O protótipo representa a especificação visual e funcional planejada para o MVP.

Isso **não significa que o sistema já esteja implementado em código**.

---

# Protótipo

Protótipo navegável:

https://claude.ai/artifact/Gwv1arQoKYix47kJHF3dF4

Após o congelamento das dez áreas, foi realizada uma auditoria geral do protótipo para verificar:

- navegação;
- fluxos;
- terminologia;
- componentes;
- estados de erro;
- loading;
- estados vazios;
- links externos;
- responsividade;
- acessibilidade;
- consistência do escopo.

O relatório dessa auditoria será incorporado à documentação do projeto após revisão da equipe.

---

# O que já está definido

Atualmente estão definidos, entre outros:

- objetivo do MVP;
- público inicial;
- papéis ALUNO e ADMIN;
- navegação principal;
- critérios de Perfil completo;
- fluxo de autenticação;
- fluxo de recuperação de senha;
- funcionamento de Estudos;
- compartilhamento de materiais por link;
- funcionamento de Oportunidade;
- funcionamento da Comunidade;
- busca de estudantes;
- Perfil público;
- Configurações;
- notificações;
- fluxo de Moderação;
- estados PENDENTE, APROVADO e REJEITADO;
- regra de que ADMIN não modera o próprio conteúdo;
- principais estados de erro, loading e vazio;
- princípios de responsividade e acessibilidade.

---

# O que ainda não está implementado

Ainda precisam ser transformados em código:

- autenticação real;
- banco de dados;
- Cadastro;
- Login;
- recuperação de senha;
- papéis e autorização;
- Home;
- Perfil;
- Estudos;
- Oportunidade;
- Comunidade;
- Perfil público;
- Configurações;
- notificações;
- Moderação;
- integração entre os módulos;
- persistência dos dados;
- responsividade real;
- testes automatizados e manuais.

---

# Próxima etapa técnica

A próxima etapa consiste em definir a arquitetura do sistema antes da implementação.

Entre as decisões necessárias estão:

1. stack;
2. arquitetura;
3. frontend;
4. backend;
5. banco de dados;
6. autenticação;
7. autorização ALUNO/ADMIN;
8. recuperação de senha e envio de e-mail;
9. estrutura das entidades;
10. estratégia de notificações;
11. estratégia de Moderação;
12. hospedagem;
13. deploy;
14. testes;
15. organização definitiva do código no repositório.

Essa etapa será conduzida principalmente por **Marcelo Henrique Germiniani Panho**, com revisão da equipe para garantir aderência aos requisitos definidos.

---

# Próxima etapa de produto

Também permanecem atividades de produto e validação, como:

- confirmação dos recursos institucionais;
- confirmação da matriz curricular;
- definição das disciplinas piloto;
- revisão dos Termos antes do piloto;
- preparação do instrumento de feedback;
- seleção de participantes;
- testes de usabilidade;
- análise dos resultados;
- priorização das melhorias.

---

# Importante

Os termos abaixo não são equivalentes:

**Definido**  
A equipe já decidiu como a funcionalidade deve funcionar.

**Prototipado**  
Existe representação navegável ou visual do comportamento esperado.

**Implementado**  
Existe código funcional executando esse comportamento.

**Validado**  
A funcionalidade foi testada no processo de validação previsto.

Essa distinção deve ser preservada na apresentação e na documentação do ConectaCC.
