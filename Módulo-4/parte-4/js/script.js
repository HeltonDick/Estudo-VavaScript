//4 Principais
//toString Função que transforma numero para String
let n = 10;
let resultado = n.toString;
console.log(resultado);

//toFixed Função que transforma número com muitos decimais em apenas aqueles que você quer que apareça
let n1 = 18.8184601643
let resultado1 = n1.toFixed(2);// Defina a quantidade de decimais que irão aparecer após o ponto na variável "n1" e coloque dentro da variável resultado1
console.log(resultado1);// Imprima o número da variável "resultado1" no console do navegador

//parseInt Função que transforma string em int (não considera ponto e vírgula)
let n2 = "18";
let resultado2 = parseInt(n2);// Transforme a variável n2 string, em number e coloque dentro do da variável "resultado3"
console.log(resultado2);// Imprima o número da variável "resultado3" no console do navegador

//parseFloat Função que transforma string em int considerando ponto e vírgula
let n3 = "18.6";
let resultado3 = parseFloat(n3);// Transfome a variável n3 string, em number e coloque dentro do da variável "resultado3"
console.log(resultado3);// Imprima o número da variável "resultado3" no console do navegador

