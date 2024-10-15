//Muda Uma Array Para Uma String
let lista = ['Açucar','Pimenta','Oregano','Sal']
let resultado = lista.toString(); //Metodo toString que tranforma a array "lista" em string. Coloque o valor na variavel "resultado"
console.log(resultado); //Imprima a variavel "resultado" no console do navegador


//join transforma uma array em uma string separando os itens seguindo o parametro do metodo
let lista1 = ['Helton','Gabriel','Dick'];
let resultado1 = lista1.join(', '); //Tranforma a array "lista1" em uma string, e coloca o valor dentro da variavel "resultado1"
console.log(resultado1); //Imprima a variavel "resultado1" no console do navegador
    

//indexOf Procura um item especifico no array, seguindo o parametro
let lista2 = ['Porta','Vidraça','Retrovisor','Pneus'];
//               0        1          2          3
let resultado2 = lista2.indexOf('Vidraça');
//Retorna o primeiro índice em que o elemento pode ser encontrado no array, e coloque este iten na vaiavel "resultado2"
console.log(resultado2); //Imprima a variavel "resultado2" no console do navegador


//Tirando ums valor da array
let lista3 = ['Arroz','Feijão','Batata','Carne'];
lista3.pop(); //Apaga o ultimo valor da array "lista3" usando o metodo
lista3.shift(); //Apaga o primeiro valor da array "lista3" usando o metodo
let resultado3 = lista3; //Coloque os valores da array "lista3" sem o primeiro e o ultimo valor, dentro da variavel "resultado3"
console.log(resultado3); //Imprima a variavel "resultado3" no console do navegador


//Push adiciona algo na array seguindo o parametro do metodo
let lista4 = ['Lápis','Tesoura','Boracha','Apontador']
lista4.push('Caneta'); //Adicione o indice "caneta" na aray "lista4"
let resultado4 = lista4; //Coloque os valores da "lista4" dentro da variavel "resultado4"
console.log(resultado4); //Imprima a variavel "resultado4" no console do navegador


//Substituir valores Selecionando o que mudar no array
let lista5 = ['Teclado','Mouse','Mouse-Pad','Fone']
lista5[2] = 'Pad'; //Selecione a "lista5" diga qual indice sera modificado, e qual sera seu novo valor
let resultado5 = lista5; //Coloque os valores da "lista5" dentro da variavel "resultado5"
console.log(resultado5); //Imprima a variavel "resultado5" no console do navegador


//splice Deleta iten(s) de uma array
let lista6 = ['A','B','J','C','D']
lista6.splice(2, 1); //Na "lista6" utilizar o objeto splice, e dizer a partir de qual indice apagar e quantos apagar
//Neste caso, selecione o indice "J" e o apague da array
let resultado6 = lista6; //Coloque os valores da "lista6" na variavel "resultado6"
console.log(resultado6); //Imprima a variavel "resultado6" no console do navegador


//concat, objeto que junnta duas arrays
let lista7 = ['Azul','Roxo','Preto','Branco']
let cor1 = ['Vermelho','Verde','Cinza','Laranja']
let resultado7 = lista7.concat(cor1);
//Selecione a array "Lista7" utilize o objeto concat e concatene com a array "cor1", em seguida coloque todos os valores dentro da variavel "resultado7"
console.log(resultado7); //Imprima a variavel "resultado7" no console do navegador


//sort, objeto para ordenar de forma alfabetica
//reverse, objeto que lista a array ao contrario
let lista8 = ['Astra','Uno','Lamborguini','Ferrari'];
lista8.sort(); //Ordene a array de forma alfabética
lista8.reverse(); //Ordene a array ao contrario
let resultado8 = lista8; //Coloque os valores da "lista8" a variavel "resultado8"
console.log(resultado8); //Imprima a variavel "resultado8" no console do navegador  