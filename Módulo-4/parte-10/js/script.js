let d = new Date();// Criando variável que recebe os valores em date

d.setMonth(d.getMonth() + 3)// Pegue a variável "date" e some mais três meses nela
//Dentro dos parênteses são colocados os parâmetros desejados, seguindo as regras de cada set
//Mudar somente o ano = .setFullYear();
//Mudar somente o mes = .setMonth();
//Mudar somente o dia-da-semana = .setDay();(retorna o dia semana / vai de 0 a 6)
//Mudar somente o dia = .setDate();
//Mudar somente o hora = .setHours();
//Mudar somente o minuto = .setMinuts();
//Mudar somente o segundo = .setSeconds();
//Mudar somente o milisegundos = .setMileseconds();
//Mudar somente o quantidadde de milisegundos entre 1907 aaté agr = .setTime();

console.log(d);// Imprime no console do navegador, os valores na variável "d"

