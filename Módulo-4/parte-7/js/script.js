let lista = [45, 21, 27, 22];
let lista2 = [];
//filter = Roda uma função que retorna os valores desejados (verdadeiro ou falso)
lista2 = lista.filter(function(i){
//Selecione a array "lista", filtre os valores da "lista" que se encontram no "i", passe pela condicional, e coloque esses valores na array "lista2"
    if(i < 20) {// Usando uma condição, veja os valores no "i" que são menores que 20
        return true;// Se sim, imprima no console do navegador
    }
    else {// Se não, não imprima nada
        return false;
    }
}); 
console.log(lista2);


let lista3 = [10, 19, 11, 9];
let lista4 = [];
//Very = se todos os elementos do array passam pelo teste da função fornecida. Este método retorna ou true(verdadeiro) ou false(falso).
lista4 = lista3.every(function(x){
//Selecione a array "lista3", leia os valores utilizando o "x", passe pela condicional, em seguida coloque os valores na array "lista4"
    if(x < 20) {// Usando uma condição, veja se todos os valores no "x" são menores que 20
        return true// Se sim imprime no console do navegador true (verdadeiro)
    }
    else {
        return false// Se não imprime no console do navegador false (falso)
    }
});
console.log(lista4);


let lista5 = [45, 17, 27, 69];
let lista6 = [];
//some = testa se ao menos um dos elementos no array passa no teste da função, e retorna um valor true(verdadeiro) ou false(falso)
lista6 = lista5.some(function(y){
//Selecione a array "lista5", leia os valores utilizando o "y", passe pela condicional, em seguida coloque os valores na array "lista6"
    if(y < 18) {// Usando uma condição, veja se ao menos um dos valores no "x" é menor que 18
        return true// Se sim imprime no console do navegador true (verdadeiro)
    }
    else {
        return false// Se não imprima no console do navegador false (falso)
    }
});
console.log(lista6);


//ARRAY'S
let lista7 = [45, 19, 27, 69];
let lista8 = [];
//retorna o valor do primeiro elemento do array que satisfizer a função
lista8 = lista7.find(function(z){
//Selecione a array "lista7", leia os valores utilizando o "z", passe pela condicional, em seguida coloque os valores na array "lista8"
    if(z == 19) {// Usando uma condição, veja qual o primeiro valor em "z" menor 19
        return true// Se achar imprime no console do navegador o valor encontrado
    }
    else {
        return false// Se não, diga "undefined"
    }
});
console.log(lista8);










//Exemplo real agora eim eu si divirto kauanzingameplay
let list = [
    {id:'1', nome:'Helton', sobrenome:'Dick'},
    {id:'2', nome:'Fridolfo', sobrenome:'Pinto'},
    {id:'3', nome:'Piroca', sobrenome:'Helton'}
];
let list1 = []

list1 = list.find(function(a){
    return(a.sobrenome == "Pinto")? true:false
})

let resposta = list1
console.log(resposta) //vai retornar o brighnite inteiro