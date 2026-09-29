# Roadmap — ConectaCC

Este documento apresenta uma proposta de evolução gradual do ConectaCC.

O roadmap não representa um cronograma rígido nem garante que todas as etapas serão executadas.

A continuidade do projeto dependerá de:

- resultados das etapas anteriores;
- disponibilidade da equipe;
- orientação docente;
- interesse dos estudantes;
- viabilidade técnica;
- possibilidades institucionais.

A ideia central é permitir que o ConectaCC cresça de forma progressiva, evitando desenvolver funcionalidades complexas antes de validar se elas realmente são úteis.

---

# Visão geral

A evolução proposta é:

1. Definição e prototipação
2. Arquitetura e implementação do MVP
3. Testes internos
4. Preparação do piloto
5. Piloto com estudantes e disciplinas
6. Revisão do MVP
7. Possível continuidade institucional / extensão
8. Possível projeto de pesquisa
9. Possível produção científica
10. Evoluções futuras do produto

---

# Fase 1 — Definição do produto e prototipação

## Objetivo

Transformar a ideia do ConectaCC em um produto com escopo compreensível e requisitos definidos antes da implementação.

## Atividades

- definir problema;
- definir público inicial;
- definir objetivos;
- delimitar MVP;
- criar identidade visual;
- definir navegação;
- definir fluxos;
- definir papéis ALUNO e ADMIN;
- prototipar telas;
- definir estados de erro, loading e vazio;
- considerar responsividade;
- considerar acessibilidade;
- realizar auditoria geral do protótipo;
- registrar decisões e pendências.

## Resultado esperado

Um protótipo navegável e documentado que possa servir como referência para implementação.

## Situação

**Concluída para o MVP atual.**

As dez áreas principais foram prototipadas:

1. Login
2. Cadastro + Termos
3. Recuperação de senha
4. Home
5. Perfil
6. Estudos
7. Oportunidade
8. Comunidade + Perfil público
9. Configurações
10. Moderação

---

# Fase 2 — Definição da arquitetura técnica

## Objetivo

Definir como o MVP será construído.

## Principais decisões

- stack;
- arquitetura;
- frontend;
- backend;
- banco de dados;
- autenticação;
- autorização;
- recuperação de senha;
- envio de e-mails;
- hospedagem;
- deploy;
- testes;
- estrutura do código.

## Responsabilidade principal

Marcelo Henrique Germiniani Panho, com participação da equipe na validação das decisões.

## Princípio

A tecnologia deverá atender ao produto definido.

A arquitetura não deve alterar requisitos de produto apenas para facilitar a implementação sem que isso seja discutido com a equipe.

---

# Fase 3 — Implementação do MVP

## Objetivo

Transformar o protótipo em uma aplicação funcional.

## Ordem inicial sugerida

1. Fundação e autenticação
2. Layout global
3. Perfil
4. Home
5. Estudos
6. Oportunidade
7. Comunidade
8. Perfil público
9. Moderação
10. Notificações
11. Configurações
12. Responsividade
13. Acessibilidade
14. Testes

A ordem poderá ser ajustada depois da definição da arquitetura.

## Resultado esperado

Uma versão funcional do MVP capaz de ser utilizada em testes internos.

---

# Fase 4 — Testes internos

## Objetivo

Identificar problemas antes de disponibilizar o sistema para estudantes participantes do piloto.

## Testes previstos

- Cadastro;
- Login;
- recuperação de senha;
- permissões ALUNO/ADMIN;
- Perfil;
- seleção de disciplinas;
- Estudos;
- compartilhamento de material;
- Oportunidade;
- indicação de oportunidade;
- Comunidade;
- busca de estudantes;
- Perfil público;
- alteração de senha;
- Moderação;
- notificações;
- links externos;
- erros;
- loading;
- responsividade;
- acessibilidade.

## Resultado esperado

Uma versão suficientemente estável para um piloto controlado.

---

# Fase 5 — Preparação do piloto

## Objetivo

Preparar o uso real do ConectaCC por um grupo limitado de estudantes.

## Antes do piloto

Deverão ser resolvidos itens como:

- confirmar domínios de e-mail institucional;
- confirmar catálogo de disciplinas;
- definir disciplinas piloto;
- confirmar links institucionais;
- revisar Termos de participação;
- definir tratamento de dados;
- definir exclusão de conta e dados;
- definir administradores;
- preparar instrumento de feedback;
- definir participantes.

## Disciplinas piloto

O ConectaCC poderá iniciar a área de materiais com um número reduzido de disciplinas.

Isso permite:

- testar o fluxo com menor complexidade;
- avaliar se estudantes utilizam os materiais;
- observar se existe interesse em compartilhar;
- identificar problemas na Moderação;
- ajustar o modelo antes de ampliar o catálogo.

Importante:

O Perfil poderá utilizar o catálogo geral do curso, mesmo que apenas algumas disciplinas possuam inicialmente a área colaborativa de materiais.

---

# Fase 6 — Piloto com estudantes

## Objetivo

Avaliar o ConectaCC em uso real.

## Possíveis participantes

Estudantes de Ciência da Computação do IFSul – Câmpus Passo Fundo.

O grupo poderá ser limitado inicialmente para facilitar acompanhamento e análise.

## Aspectos a observar

- facilidade de uso;
- compreensão da proposta;
- utilidade de Estudos;
- facilidade para encontrar materiais;
- interesse em compartilhar materiais;
- utilidade de Oportunidade;
- uso da Comunidade;
- facilidade para encontrar estudantes;
- compreensão da Moderação;
- utilidade das notificações;
- dificuldades de navegação;
- funcionalidades consideradas desnecessárias;
- necessidades não previstas.

## Feedback

O piloto deverá utilizar um instrumento estruturado de feedback.

Podem ser utilizados:

- formulário;
- perguntas de usabilidade;
- espaço para sugestões;
- observação do uso;
- registro de dificuldades.

---

# Fase 7 — Revisão após o piloto

## Objetivo

Transformar feedback em decisões de produto.

## Atividades

- organizar os feedbacks;
- identificar problemas recorrentes;
- separar bug de necessidade;
- identificar funcionalidades pouco utilizadas;
- identificar funcionalidades valorizadas;
- revisar prioridades;
- revisar personas;
- revisar requisitos;
- revisar fluxos;
- corrigir problemas.

## Resultado esperado

Uma nova versão do ConectaCC baseada em evidências de uso, e não apenas em hipóteses da equipe.

---

# Fase 8 — Possível continuidade como projeto de extensão

Esta etapa depende de orientação e enquadramento institucional.

O ConectaCC poderá futuramente ser avaliado como uma iniciativa de extensão ou continuidade institucional caso exista:

- interesse da comunidade acadêmica;
- utilidade demonstrada;
- condições de manutenção;
- orientação docente;
- aprovação institucional adequada.

## Possíveis objetivos

- ampliar participação de estudantes;
- envolver novos colaboradores;
- melhorar os recursos existentes;
- criar ações de integração;
- ampliar a quantidade de disciplinas;
- aproximar estudantes de diferentes semestres;
- fortalecer circulação de oportunidades.

O projeto não deve afirmar antecipadamente que se tornará projeto de extensão.

Essa possibilidade deverá ser avaliada formalmente.

---

# Fase 9 — Possível projeto de pesquisa

Depois de possuir uma versão funcional e dados de uso, o ConectaCC poderá gerar perguntas de pesquisa.

Exemplos de questões possíveis:

- Quais informações acadêmicas os estudantes têm mais dificuldade de localizar?
- Uma plataforma de integração reduz a percepção de fragmentação dos recursos acadêmicos?
- Quais funcionalidades colaborativas geram maior participação?
- Estudantes compartilham materiais quando existe Moderação?
- Como estudantes percebem o compartilhamento anônimo ou identificado de materiais?
- A busca por colegas facilita a percepção de apoio dentro do curso?
- Quais fatores influenciam a adoção de uma plataforma acadêmica colaborativa?
- Quais barreiras impedem estudantes de utilizar recursos institucionais já existentes?

Essas questões são exemplos.

Uma pesquisa real deverá possuir:

- problema de pesquisa;
- metodologia;
- orientação;
- instrumentos adequados;
- cuidados éticos;
- análise dos dados.

O piloto de produto não deve ser automaticamente tratado como pesquisa científica.

---

# Fase 10 — Possível produção científica

Caso exista uma pesquisa formal, resultados do ConectaCC poderão futuramente contribuir para:

- artigo científico;
- resumo expandido;
- apresentação em evento;
- trabalho acadêmico;
- projeto científico;
- TCC;
- estudos sobre permanência, integração ou experiência estudantil.

A produção científica deverá ser baseada em:

- metodologia definida;
- dados adequados;
- análise;
- referências científicas;
- orientação acadêmica.

O desenvolvimento do software, sozinho, não deve ser apresentado automaticamente como pesquisa científica.

---

# Fase 11 — Possível expansão

Somente depois de validar o funcionamento no contexto inicial deverá ser avaliada expansão.

Possibilidades:

- outras disciplinas;
- outros semestres;
- outros cursos;
- outros câmpus;
- novas iniciativas institucionais.

A expansão não faz parte do MVP atual.

---

# Fase 12 — Funcionalidades futuras possíveis

As seguintes funcionalidades já foram discutidas, mas permanecem fora do MVP.

## Apoio entre estudantes

- botão "Preciso de ajuda";
- identificação automática de colegas que podem ajudar;
- matching;
- pedidos de ajuda;
- acompanhamento de dúvidas.

## Comunicação

- chat;
- mensagens diretas;
- espaços de dúvidas;
- conversas entre estudantes.

## Comunidade

- comentários;
- reações;
- recursos sociais adicionais.

## Estudos

- upload de arquivos;
- favoritos;
- avaliações;
- histórico;
- trilhas de estudo;
- organização mais avançada dos materiais.

## Perfil

- foto;
- controle de visibilidade;
- escolha de aparecer ou não na Comunidade.

## Oportunidades

- favoritos;
- alertas;
- filtros adicionais;
- acompanhamento de oportunidades.

## Administração

- histórico de decisões;
- auditoria;
- remoção de conteúdo aprovado;
- gestão administrativa;
- contador de pendências.

## Inteligência Artificial

Possibilidades futuras poderão ser estudadas, como:

- orientação;
- descoberta de recursos;
- apoio na navegação;
- recomendações;
- Agente Orienta.

Nenhuma dessas funcionalidades pertence ao MVP atual.

---

# Princípios para decidir evoluções

Uma nova funcionalidade não deve entrar apenas porque é tecnicamente interessante.

Antes de adicionar algo, perguntar:

1. Qual problema real isso resolve?
2. Estudantes demonstraram necessidade?
3. Já existe uma ferramenta institucional que resolve isso?
4. O ConectaCC deve construir ou apenas conectar essa solução?
5. A funcionalidade aumenta muito a complexidade?
6. É possível testar uma versão mais simples primeiro?
7. Existe capacidade de manter a funcionalidade depois?

---

# Princípio de evolução

O ConectaCC deve crescer de forma gradual:

> **definir → construir → testar → aprender → ajustar → evoluir**

O objetivo não é desenvolver o maior número possível de funcionalidades.

O objetivo é construir algo útil, sustentável e coerente com as necessidades reais da comunidade acadêmica.
