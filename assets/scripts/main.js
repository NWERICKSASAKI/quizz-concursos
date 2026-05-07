
// import { carregarJSONs } from './loader.js';
// import { iniciarQuiz } from './quiz.js';
// import { mostrarTemas, mostrarPergunta } from './ui.js';

const element_answers = document.getElementById("answers");
const element_question = document.getElementById("question");

function colocarHeader(){
    const obj_header = document.querySelector("header");
    fetch("utils/header.html")
        .then(response => response.text())
        .then(data => {
            header_content = data;
            obj_header.innerHTML = header_content
        });

    carregarCSSHeader()
    carregarJSHeader()
}

function carregarCSSHeader() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './assets/css/header.css';
    document.head.appendChild(link);
}

function carregarJSHeader() {
    const script = document.createElement('script');
    script.src = './assets/scripts/header.js';
    document.body.appendChild(script);
}

function listar_conteudos() {
    return fetch("./assets/conteudos/")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(data, 'text/html');
            const links = htmlDoc.querySelectorAll('a');

            const arquivos_json = [];

            links.forEach(link => {
                if (link.href.endsWith('.json')) {
                    let fileName = link.href.split('/').pop();
                    fileName = fileName.replace(/%20/g, ' ');
                    fileName = fileName.replace('.json', '');
                    arquivos_json.push(fileName);
                }
            });

            return arquivos_json;
        });
}

function adicionar_cards_conteudos(lista) {
    element_answers.innerHTML = ''
    letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    lista.forEach(conteudo => {
        letra = letras.shift();
        let card = `
        <div class="card_alternativa container">
            <button class="lr c" onclick="iniciar_quiz('${conteudo}')">${letra}</button>
            <p class="conteudo_resposta">
                ${conteudo}
            </p>
        </div>
        `;
        element_answers.innerHTML += card;
    });
}

function iniciar_quiz(titulo_conteudo) {
    fetch(`./assets/conteudos/${titulo_conteudo}.json`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let pergunta = data.lista_perguntas[0].pergunta; // TODO: implementar lógica para percorrer as perguntas
            element_question.innerHTML = pergunta;

        });
    // console.log(`Iniciando quiz para o conteúdo: ${titulo_conteudo}`);
    // Aqui você pode adicionar a lógica para iniciar o quiz, como carregar as perguntas e respostas relacionadas ao conteúdo selecionado.
}

function carregar_home() {
    lista = listar_conteudos().then(lista => {
        adicionar_cards_conteudos(lista);
    });
}

colocarHeader()
carregar_home()

// https://nwericksasaki.github.io/quizz-concursos/