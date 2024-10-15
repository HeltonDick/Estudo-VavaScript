function roxo() {
    document.querySelector('#cor').classList.add('roxo');
    document.querySelector('#cor').classList.remove('azul');
    document.querySelector('#cor').classList.remove('verde');

}

function azul() {
    document.querySelector('#cor').classList.add('azul');
    document.querySelector('#cor').classList.remove('roxo');
    document.querySelector('#cor').classList.remove('verde');
}

function verde() {
    document.querySelector('#cor').classList.add('verde');
    document.querySelector('#cor').classList.remove('roxo');
    document.querySelector('#cor').classList.remove('azul');
}

function Telefone() {
    document.querySelector('#troca').style.display="block";
}

function Esconder() {
    document.querySelector('#troca').style.display="none"
}