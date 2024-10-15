//Replace = Re-escreve uma parte da String
let nome = "Helton Gabriel Dick"
let resultado = nome.replace('Helton','Gabriel');// Apagar e reescrever, seleciona o Helton e substitui por Gabriel 
console.log(resultado);

//Função toUpperCase Transforma o texto em Maiúsculo e toLowerCase em Minúsculo
let nome1 = "Helton Gabriel Dick"
let resultado1 = nome.toUpperCase();// Aplique a função toUpperCase na variável "nome" e coloque o resultado na variável "resultado1"
console.log(resultado1);// Imprima a variável "resultado1" no console do navegador

//Trim, Função que retira os espaços em branco da string
let nome2 = "               Helton Dick                    "
let resultado2 = nome2.trim();// Aplique a função trim na variável "nome2" e coloque o resultado na variável "resultado2"
console.log(resultado2);// Imprima a variável "resultado2" no console do navegador

//charAt Função para descobrir que letra está no parâmetro definido na função
let nome3 = "Helton Dick"
let resultado3 = nome3.charAt(5);// Aplique a função charAt na variável "nome3" e coloque o resultado na variável "resultado3"
console.log(resultado3);// Imprima a variável "resultado3" no console do navegador

//split Função para dividir string em array
let nome4 = "Carro Moto Avião Motocicleta Bicicleta"
let resultado4 = nome4.split(' ');
//Aplique a função split com o parâmetro de espaçamento, na variável "nome4" e coloque o resultado na variável resultado4
console.log(resultado4);// Imprima a variável "resultado4" no console do navegador

