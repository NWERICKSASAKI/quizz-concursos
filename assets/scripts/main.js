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
    link.href = 'assets/css/header.css';
    document.head.appendChild(link);
}

function carregarJSHeader() {
    const script = document.createElement('script');
    script.src = 'assets/scripts/header.js';
    document.body.appendChild(script);
}

function listar_conteudos() {
    return fetch("assets/conteudos/")
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
    const container = document.getElementById("answers");
    letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    lista.forEach(conteudo => {
        letra = letras.shift();
        let card = `
        <div class="card_alternativa container">
            <span class="lr c">${letra}</span>
            <p class="conteudo_resposta">
                ${conteudo}
            </p>
        </div>
        `;
        container.innerHTML += card;
    });
}

colocarHeader()
lista = listar_conteudos().then(lista => {
    adicionar_cards_conteudos(lista);
});