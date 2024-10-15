let lista = [18, 20, 49, 30];
let lista2 = [];// Array que recebera um futuro valor

lista2 = lista.map(function(i){// Vai mapear a array e criar uma função em que nela é selecionado cada elemento da array e em seguida multiplicado por 2
    return item * 2;
});

let resultado = lista2;// Pegue os valores multiplicados na "lista2" e coloque na variável "resultado"
console.log(resultado);// Imprima os números da variável "resultado" no console do navegador





//Fazendo utilizando um for
let lista3 = [24, 16, 19, 50];
let lista4 = [];

for (let i in lista3) { //nesta versão percorremos a array utilizando um for/i
    lista4.push(lista3[i] * 2) //em seguida colocamos os valores guardados em i e multiplicados por 2, na lista 4 utilizando o push
}

let resultado1 = lista4;
console.log(resultado1)