# Quiz Concursos

Desenvolvi essa pequena página para poder praticar execícios dos conteúdos que vim estudando para alguns concursos públicos.  

Ao mesmo tempo que pratico um pouco de front-end :D

## Funcionamento

Na página inicial teremos a opção de qual conteúdo gostaria de fazer exercícios, ao clicar irá iniciar os questionários.

Esses questionários estão armazenados em arquivos JSON que possui uma lista de questões e suas respectivas respostas certas e erradas, mas com alguns resalves:

*Você concurseiro já quis praticar exercícios de um determinado conteúdo mas já os fez tanto que decorou a sequência de resposta de cada pergunta?*

Então, aqui eu deixei uma lista de respostas certas e erradas e o próprio algoritmo aqui sorteia: *Mesma pergunta, mas com respostas certas diversificadas!*

## TO-DOs

### Funcional

Lista de coisas que preciso terminar e elaborar para deixar minimente funcional.

Página Home:

- [x] Criar um `index.json` listando todos os arquivos que há na pasta `.assets/conteudos/`
- [x] Reformular a lógica de listagem das opções de arquivos JSON de `fetch('.assets/conteudos/')` para ler um `index.json`.
- [ ] Fazer um leitor de arquivos JSON externos para aceitar questões personalizadas

Página de Questões:

- [ ] Implementar o sistema de leitura do arquivo JSON e construir a página dos exercícios
- - [ ] Construir o leitor de JSON
- - [ ] Alterar o letreiro para o tema selecionado
- - [x] Inserir a questão em seu campo
- - [ ] Construir o seletor aleatório de respostas (certas e erradas) 
- - [ ] Inserir as respostas em seu respectivo campo
- - [ ] Algoritmo para identificar se a resposta seleciona está certa ou errada
- - [ ] Acrescentar botão para avançar / voltar os exercícios


### Cosméticos

Coisas não essenciais mas que deixariam interessantes a experiência:

- [ ] Suaviar a borda do botão de seleção de alternativa
- [ ] Um timer por exercício
- [ ] Indicador de quantos exercícios tem
- [ ] Selecionador para qual exercício pular 
- [ ] Acrescentar som de acerto ou erro
- [ ] Inserir um som ambiente para concentração
- [ ] Opção para silenciar sons
- [ ] Criar uma página para agrupar as configurações ?
- [ ] Opção para randozimar questões
- [ ] Indicador de quantidade de exercícios acertados
- [ ] Salvar configurações e dados estatísticos localmente
