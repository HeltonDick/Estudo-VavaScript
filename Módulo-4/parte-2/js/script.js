//Métodos responsáveis por extrair informações de uma string

//1-Slice (dividir)
//          0 2 4 6 8
let nome = "Helton Gabriel Dick";
//           1 3 5 7 9...

let resultado = nome.slice(7, 14);// Colocamos 2 parâmetros (posição inicial e final para selecionar caracteres)
//E colocamos os valores dentro da variável "resultado"

console.log(resultado);// Imprime os valores dentro da variavel resultado

//2-Substr         -3-1 
let nome1 = "Zack Zayry";
//             ...-4-2
let resultado1 = nome1.substr(-4);// A mesma coisa que slice, pórem o substr aceita número negativos
//Uma versão melhor, porque funciona com negativo também

console.log(resultado1);// Imprime o relustado o console do navegador

