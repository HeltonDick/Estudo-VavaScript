function verde() {// Função do botão verde que tira e coloca classes já criadas
    document.querySelector('#cor').classList.add('verde');
    // Adicione no id "cor", a classe "verde", sendo que a classe "verde" traz com ela a cor verde colocada no css
    document.querySelector('#cor').classList.remove('azul');
    // Remova do id "cor", a classe "azul", sendo que a classe "azul" traz com ela a cor azul colocada no css
    document.querySelector('#cor').classList.remove('vermelho');
    // Remova do id "cor", a classe "vermelho", sendo que a classe "vermelho" traz com ela a cor vermelha colocada no css
}
function azul() {// Função do botão azul que tira e coloca classes já criadas
    document.querySelector('#cor').classList.add('azul');
    document.querySelector('#cor').classList.remove('verde');
    document.querySelector('#cor').classList.remove('vermelho')
}
function vermelho() {// Função do botão verelho que tira e coloca classes já criadas
    document.querySelector('#cor').classList.add('vermelho');
    document.querySelector('#cor').classList.remove('verde');
    document.querySelector('#cor').classList.remove('azul');
}



//Tentatia de fazer algo mais lógico pq como o troxãoa n testou então provavelmente n funciona
if (verde() == onclick) {
    document.querySelector('#cor').classList.add('verde');
}
else {
    document.querySelector('#cor').classList.remove('verde');
}
if (vermelho() == onclick) {
    document.querySelector('#cor').classList.add('vermelho');
}
else {
    document.querySelector('#cor').classList.remove('vermelho');
}
if (azul() == onclick) {
    document.querySelector('#cor').classList.add('azul');
}
else {
    document.querySelector('#cor').classList.remove('azul');
}

/*Aqui eu já não sei mais o que eu to faazendo da minhaa vida, não tem lógicaa, sentido, pai, namorada, felicidade, porem, tem motivos para levantar da cama
function trocar() {
    if (document.querySelector('button').classList.contains('verde')) {
        document.querySelector('button').classList.remove('verde').add('azul');
    }
}
*/