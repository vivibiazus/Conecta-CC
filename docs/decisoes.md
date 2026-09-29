# Registro de Decisões — ConectaCC

Este documento registra decisões importantes tomadas durante a definição do ConectaCC.

O objetivo é evitar que decisões já discutidas sejam perdidas ou reabertas sem necessidade durante a implementação.

Este documento registra principalmente decisões de:

- produto;
- experiência do usuário;
- escopo;
- regras funcionais;
- prototipação.

Decisões de arquitetura técnica serão adicionadas posteriormente, depois da análise conduzida por Marcelo Henrique Germiniani Panho.

---

# 1. Princípio central do projeto

## Decisão

O ConectaCC deve:

> **conectar o que já existe e criar novas formas de colaboração entre estudantes.**

## Consequência

O ConectaCC não deve tentar substituir:

- Moodle;
- SUAP;
- páginas institucionais;
- sites do IFSul;
- sistemas acadêmicos existentes.

Quando uma informação já possuir fonte oficial:

→ o ConectaCC deve preferencialmente direcionar para a fonte original.

---

# 2. Público inicial

## Decisão

O MVP será inicialmente voltado para:

**estudantes de Ciência da Computação do IFSul – Câmpus Passo Fundo.**

## Fora do MVP

A expansão para:

- outros cursos;
- outros câmpus;
- outras instituições;

fica para evolução futura.

---

# 3. Nome visual

## Decisão

O nome oficial utilizado na interface e documentação é:

**ConectaCC**

Evitar variações como:

- Conecta CC;
- Conecta-CC;
- conectaCC.

O nome técnico do repositório pode seguir convenções diferentes.

---

# 4. Navegação principal

## Decisão

A sidebar do ALUNO possui, nesta ordem:

1. Home
2. Estudos
3. Oportunidade
4. Comunidade
5. Perfil

Grupo inferior:

- Configurações
- Sair

Para ADMIN:

- Moderação

aparece acima de Configurações.

---

# 5. Nome da área Estudos

## Decisão

A área acadêmica será chamada:

**Estudos**

Não utilizar no menu:

- Acadêmico;
- CC Estudos.

---

# 6. Oportunidade no singular

## Decisão

O nome do item da navegação é:

**Oportunidade**

No conteúdo da página podem ser utilizadas expressões no plural, como:

**Oportunidades indicadas pela comunidade.**

---

# 7. Papéis do MVP

## Decisão

O MVP possui dois papéis:

- ALUNO;
- ADMIN.

ADMIN possui as funcionalidades comuns do usuário e adicionalmente acesso à Moderação.

---

# 8. Perfil completo

## Decisão

Um Perfil é considerado completo quando possui:

- Nome de exibição;
- pelo menos uma disciplina atual.

Todos os demais campos são opcionais.

## Consequência

Enquanto o Perfil estiver incompleto:

→ a Home apresenta **Complete seu perfil**.

Depois de completo:

→ o card desaparece.

Não utilizar porcentagem ou gamificação de completude.

---

# 9. Nome de exibição

## Decisão

O cadastro solicita:

**Nome completo**

Esse valor é utilizado inicialmente como:

**Nome de exibição**

Depois, o estudante pode alterar o Nome de exibição no Perfil.

O Nome completo não precisa ser solicitado novamente no Perfil.

---

# 10. Avatar

## Decisão

No MVP, o avatar utiliza iniciais.

Exemplos:

Viviane Biazus Aneris → VA

Marcelo Henrique Germiniani Panho → MP

## Pós-MVP

Upload de foto de Perfil poderá ser avaliado futuramente.

---

# 11. Curso

## Decisão

No MVP, o curso é:

**Ciência da Computação**

Não existe seletor de curso.

---

# 12. Disciplinas atuais

## Decisão

O Perfil poderá selecionar disciplinas atuais.

A lista deverá possuir todas as disciplinas confirmadas do curso, e não apenas as disciplinas piloto.

## Consequência

As disciplinas selecionadas alimentam:

**Minhas disciplinas**

em Estudos.

---

# 13. Visibilidade das disciplinas atuais

## Decisão

As disciplinas atuais podem ser visualizadas por outros estudantes autenticados no ConectaCC.

Elas não são públicas para a internet.

## Consequência

Antes do piloto real:

→ os Termos de participação deverão informar essa visibilidade explicitamente.

---

# 14. Perfil público

## Decisão

Perfis podem ser vistos por outros usuários autenticados.

No MVP não existe:

- Perfil público para a internet;
- opção “Quero aparecer na Comunidade”;
- controle individual de visibilidade.

Essas possibilidades ficam para evolução futura.

---

# 15. Busca de estudantes

## Decisão

A busca da Comunidade poderá considerar:

- Nome de exibição;
- Interesses;
- Pode ajudar com;
- Procura ajuda com;
- Disciplinas atuais.

## Regras

- o próprio usuário não aparece nos próprios resultados;
- sem busca, utilizar ordem alfabética;
- disciplina atual não significa que o estudante pode ajudar naquela disciplina.

---

# 16. Linguagem de ajuda

## Decisão

No Perfil do próprio usuário:

- Posso ajudar com
- Procuro ajuda com

Nas visualizações públicas:

- Pode ajudar com
- Procura ajuda com

---

# 17. Materiais do MVP

## Decisão

Materiais serão compartilhados por:

**link**

Não haverá upload direto de arquivos no MVP.

## Motivo

Upload adicionaria complexidade relacionada a:

- armazenamento;
- tipos de arquivo;
- tamanho;
- segurança;
- direitos autorais;
- infraestrutura.

---

# 18. Autoria dos materiais

## Decisão atual

Publicamente, o protótipo utiliza:

**Compartilhado pela comunidade**

O ADMIN consegue identificar o autor para:

- Moderação;
- notificação.

## Status

A decisão definitiva sobre anonimato público permanece como hipótese a validar com estudantes.

---

# 19. Disciplinas piloto

## Decisão

Todas as disciplinas confirmadas podem existir no Perfil e no catálogo de Estudos.

Somente algumas poderão inicialmente possuir:

- materiais;
- compartilhamento;
- área colaborativa.

Essas serão utilizadas como disciplinas piloto.

As disciplinas piloto ainda precisam ser escolhidas.

---

# 20. Links institucionais

## Decisão

Nunca inventar URL institucional.

Quando um endereço ainda não estiver confirmado:

→ não apresentar link falso.

No protótipo pode existir:

**Link oficial a confirmar**

Em produção, o link só aparece depois da confirmação da URL.

---

# 21. Oportunidades

## Decisão

A área Oportunidade separa:

### Oportunidades do IFSul

Recursos institucionais curados.

### Oportunidades indicadas pela comunidade

Conteúdos enviados por estudantes e moderados.

Não misturar as duas origens em uma única lista no MVP.

---

# 22. Tipos de oportunidade

## Decisão

Os tipos iniciais são:

- Estágio;
- Emprego;
- Evento;
- Projeto;
- Outro.

Não permitir criação livre de novos tipos no MVP.

---

# 23. Data pública de oportunidades

## Decisão

Para oportunidades da comunidade:

→ utilizar a data de aprovação/publicação como referência pública.

A data original de envio permanece informação interna.

---

# 24. Comunidade

## Decisão

A Comunidade possui três áreas:

1. O que está rolando
2. Encontre estudantes
3. Conecte-se com a comunidade

O módulo não deve se transformar em uma rede social completa no MVP.

---

# 25. Feed

## Decisão

O feed é:

- cronológico;
- simples;
- do mais recente para o mais antigo.

Não possui:

- algoritmo de recomendação;
- curtidas;
- comentários;
- seguidores;
- ranking;
- repost.

---

# 26. Compartilhamento na Comunidade

## Decisão

No MVP, publicações compartilhadas possuem:

- Título;
- Descrição;
- Link.

A publicação passa por Moderação antes de aparecer no feed.

Não existe postagem apenas de texto ou upload de imagem/arquivo nesta versão.

---

# 27. Canais da Comunidade

## Decisão

Foram previstos:

- grupo de WhatsApp dos estudantes;
- Instagram institucional;
- Arena Games.

Links ainda não confirmados não devem ser inventados.

---

# 28. Configurações

## Decisão

Configurações possui somente:

### Conta

- E-mail institucional somente leitura.

### Segurança

- alteração de senha.

Não adicionar opções apenas para preencher a página.

---

# 29. Exclusão de conta

## Decisão

Não existe exclusão automática de conta na interface atual do MVP.

## Obrigatório antes do piloto

Definir:

- procedimento de exclusão;
- exclusão de dados;
- responsabilidades;
- retenção;
- impacto sobre conteúdos enviados.

---

# 30. Senha

## Decisão

Regra mínima:

- 8 caracteres;
- confirmação igual.

Não exigir obrigatoriamente:

- símbolo;
- número;
- letra maiúscula.

---

# 31. Recuperação de senha

## Decisão

Não utilizar fluxo inseguro:

E-mail
→ Nova senha.

O fluxo correto é:

E-mail
→ envio de instruções
→ link recebido
→ Nova senha
→ sucesso.

A implementação de token e validade será decidida na arquitetura.

---

# 32. Confirmação de e-mail

## Status

Ainda não decidida definitivamente.

A confirmação de propriedade do e-mail deverá ser analisada antes do piloto.

Não confundir:

- validação de formato;
- validação de domínio;
- confirmação de propriedade.

São questões diferentes.

---

# 33. Notificações

## Decisão

No MVP, notificações utilizam:

- sino;
- contador;
- dropdown;
- marcar como lida;
- marcar todas como lidas.

Tipos principais:

- Material aprovado/rejeitado;
- Publicação aprovada/rejeitada;
- Oportunidade aprovada/rejeitada.

Não criar página específica de notificações no MVP.

---

# 34. Moderação

## Decisão

Existe uma única fila de Moderação.

Tipos:

- MATERIAL;
- PUBLICAÇÃO;
- OPORTUNIDADE.

Estados:

- PENDENTE;
- APROVADO;
- REJEITADO.

Não criar três sistemas de Moderação separados.

---

# 35. Ordem da fila de Moderação

## Decisão

Pendências são ordenadas:

**mais antigas primeiro**

para priorizar quem está esperando há mais tempo.

---

# 36. ADMIN e próprio conteúdo

## Decisão

ADMIN não pode:

- Aprovar;
- Rejeitar;

conteúdo de sua própria autoria.

Seu conteúdo:

- aparece na fila;
- possui indicação “Seu envio”;
- pode ser consultado;
- deve ser analisado por outro ADMIN.

## Consequência para o piloto

Se ADMIN também utilizar a plataforma como estudante:

→ deverá existir mais de um ADMIN.

---

# 37. Motivo da rejeição

## Decisão

O motivo da rejeição é:

**opcional**

Quando informado:

→ pode ser exibido ao autor na notificação.

Antes do piloto deverá existir orientação básica de redação para administradores.

---

# 38. Concorrência na Moderação

## Decisão

Uma segunda decisão nunca deve sobrescrever uma decisão anterior.

Se um conteúdo já tiver sido analisado:

→ apresentar estado equivalente a:

**Este conteúdo já foi analisado.**

A implementação técnica será definida posteriormente.

---

# 39. Conteúdo aprovado

## Decisão

Quando aprovado:

Material  
→ Estudos

Publicação  
→ Comunidade

Oportunidade  
→ Oportunidade

O conteúdo sai da fila de pendentes e o autor recebe notificação.

---

# 40. Conteúdo rejeitado

## Decisão

Quando rejeitado:

- não é publicado;
- sai da fila;
- autor recebe notificação;
- motivo pode ser incluído.

---

# 41. “Mostrar mais”

## Decisão

No MVP, feed e lista de estudantes utilizam:

**Mostrar mais**

em vez de rolagem infinita.

A quantidade inicial ainda será definida durante a implementação.

---

# 42. Identidade visual

## Decisão

O azul é a base da identidade.

Referências principais:

- `#071F43`
- `#0D1933`
- `#2259B9`
- `#4D84CF`
- `#A3C5F2`
- `#EEF7FC`

Ver:

`identidade-visual.md`

---

# 43. Cores semânticas

## Decisão

Verde:

- sucesso;
- aprovação;
- operação concluída.

Vermelho:

- erro;
- rejeição;
- ação destrutiva.

Âmbar:

- pendência;
- atenção.

Disponibilidade de materiais utiliza azul, e não verde.

---

# 44. Responsividade

## Decisão de protótipo

Desktop:

- sidebar fixa.

Mobile:

- sidebar vira drawer.

A estratégia poderá ser refinada na implementação sem alterar a lógica de navegação.

---

# 45. Escopo social

## Decisão

Não pertencem ao MVP:

- chat;
- comentários;
- curtidas;
- seguidores;
- mensagens diretas;
- matching;
- Pedir ajuda.

Essas possibilidades ficam no roadmap.

---

# 46. Inteligência Artificial

## Decisão

IA não faz parte do MVP atual.

Possibilidades como:

- Agente Orienta;
- recomendações;
- apoio à navegação;

ficam para análise futura.

---

# 47. Arquitetura

## Status

Ainda não definida.

Decisões como:

- stack;
- frontend;
- backend;
- banco;
- hospedagem;
- autenticação;
- deploy;

serão analisadas posteriormente por Marcelo Henrique Germiniani Panho com apoio da equipe.

Não criar estrutura técnica definitiva no repositório antes dessa decisão.

---

# 48. Princípio para decisões futuras

Antes de incluir uma nova funcionalidade, avaliar:

1. Qual problema ela resolve?
2. Existe necessidade demonstrada?
3. Já existe solução institucional?
4. O ConectaCC precisa construir ou apenas conectar?
5. Quanto aumenta a complexidade?
6. É possível testar uma versão mais simples?
7. Existe capacidade de manutenção?

---

# 49. Estado do protótipo

As dez áreas principais do MVP foram:

- definidas;
- prototipadas;
- congeladas;
- auditadas.

A auditoria final considerou o protótipo consistente o suficiente para servir como referência para implementação.

Isso não significa que o sistema esteja implementado.

---

# 50. Manutenção deste documento

Novas decisões relevantes devem ser adicionadas aqui durante o projeto.

Quando uma decisão técnica for tomada, registrar:

- o que foi decidido;
- por que foi decidido;
- quais alternativas foram consideradas;
- consequências principais;
- data da decisão.

Isso permitirá manter histórico e reduzir retrabalho.
