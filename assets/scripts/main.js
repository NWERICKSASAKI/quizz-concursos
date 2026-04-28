
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


colocarHeader()