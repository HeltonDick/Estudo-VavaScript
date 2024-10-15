//DOM (Document Object Model)
//DOM - Referencia de elementos da tela (div, id, class, etc)




document.getElementById('Titulo').innerHTML="Mudei o título, estou mostrando no alert";// Selecionando via ID

document.getElementsByClassName('lista')[0].innerHTML="olhos, língua, estomago";
// Os colchetes são usados pra definir qual classe é para escolher, isto se tiver mais de uma classe com o mesmo nome

document.getElementsByClassName('lista')[1].innerHTML="Teclado, Mouse, Monitor";// Selecionando a primeira classe designada como "lista"
document.getElementsByTagName('button');// Selecionar via tag "botão"
document.getElementsByName('email');// Selecionar via "nome"

// O query selector, seleciona aquilo que primeiro aparecer com aqueles parametros
document.querySelector('#Titulo');// Selecionando ID
document.querySelector('.lista');// Seleciona a partir da classe
document.querySelector('button');// Seleciona a partir de tag

// A outro tipo de query, aquele que seleciona tudo de acordo com seu parametros
document.querySelectorAll('#Titulo')// Não a sentido selecionar tudo que tem um certo id, se id é algo unico que não se repete
document.querySelectorAll('.lista')// Selecionando todas as classes "lista"
document.querySelectorAll('button')// Selecionando todas as tags "botão"