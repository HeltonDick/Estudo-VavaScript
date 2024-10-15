var nome = "Helton Gabriel Dick";// Tipo String é definido a partir de aspas duplas
var idade = 18;// Tipo Number é definido por um número
var boolean = true;// Variável para testar se é true ou false (verdadeiro ou falso / positivo ou negativo)
var ndefinida;// Variável que é indefinida e tem o nome de undefined

//typeof = teste para saber qual o tipo da variável (se é string, number, undefined etc)
typeof nome;
typeof idade;
typeof boolean;
typeof ndefinida;




//Função na idade das pedras
function alterar(Titulo) {
    document.getElementById('Titulo').innerHTML="Troquemo tudo os cu, É DEDO NO CU E GRITARIA"
}
alterar('Titulo de exemplo');

function errado() {
    document.querySelector('#resposta').classList.add('errado');
    document.querySelector('#resposta').classList.remove('certo');
    document.querySelector('#resposta').innerHTML="OS DE VERDADE EU SEI QUEM SÃO"
}
function certo() {
    document.querySelector('#resposta').classList.add('certo');
    document.querySelector('#resposta').classList.remove('errado');
    document.querySelector('#resposta').innerHTML="Parabéns por não errar meu nome"

}

