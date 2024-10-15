let d = new Date();// Date carrega informações de data horário fusu horario do momento que foi criado

console.log(d);// Imprime no console do navegador a variável carregando as informações de data/date

//.toDateString() Resume e facilita o entedimento da instancia date
console.log(d.toDateString());

let d1 = new Date(2023, 4, 26, 12, 30, 30);// Eu posso chegar a colocar no máximo 7 parâmetros

console.log(d1);// Imprime no console do navegador a segunda variável carregando as informações de data/date    
//primeiro parâmetro: ANO
//segundo parâmetro: MES (começa a contar a partir do 0)
//terceiro parâmetro: DIA
//quarto parâmetro: HORA
//quinto parâmetro: minutos
//sexto parâmetro: segundos