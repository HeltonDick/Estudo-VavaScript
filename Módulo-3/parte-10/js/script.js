//FOR LOOP = Percorre valores utilizando uma variavel auxiliar, sendo o 'I'
let contagem = '';// Variavel que vai receber os valores dis numeros percorridos

for (let i = 0; i <= 100; i++) {// Três etapas (1-criação da variavel auciliar; 2-Criação de condição; 3-incrementação)
    //Percorra o "i" de 0 a 100
    contagem = contagem + i + "<br>";
    //Imprima cada valor percorrido pelo "i", dentro da variavel contagem, e a cada numero passado a variavel, quebre a linha com um br
}
document.getElementById('numeros').innerHTML = contagem;// Celecione o elemento com o id "numeros", e imprima "contgem"



//FOR LOOP ARRAY = Percorre uma array guardando os valores no 'I'
let nomes = ['Helton','Gabriel','Dick','Zack','Zayry','Gomes','Silva'];
let html = '<ol>'; //Ol em html para abrir a tag da lista numerada

for (let i in nomes) {//Em uma contagen de aray utilizando o for, precisaos apenas da variavel auciliar e do array
    html += '<li>' + nomes[i] + '</li>'; //Imprimindo os nomes dentro de uma linha da lista
    /*Tag abertura  Valores         fecgamento
    de uma lista    concatenados    da tag
                    a tag
    */
}
html += '</ol>'; //E após a impressão, feche a lista
document.getElementById("lista").innerHTML = html;