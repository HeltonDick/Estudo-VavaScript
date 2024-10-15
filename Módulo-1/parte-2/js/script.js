var hora = 20;

if (hora < 12) {
    window.alert("Bom Dia");
}
else if (hora < 18) {
    window.alert("Boa Tarde");
}
else if (hora <= 23) {
    window.alert("Boa noite");
}

var hora2 = 15;

if (hora2 < 12) {// Se a "hora2" for menor que 12
    document.write("Bom dia");// De bom dia
}
else if (hora2 >= 12 && hora < 18) {// Se a "hora" for maior ou igual a 12 e menor que 18
    document.write("Boa Tarde");// De boa tarde
}
else if (hora2 > 18 && hora2 <=23) {// Se a "hora2" for menor que 18 e menor ou igual a 23
    document.write("Boa Noite");// De boa noite
}
//Esta versão é algo para aplicar uma condição a variável hora
//em que se a condição for cumprida, impria bom dia, boa tarde ou boa noite

var hora3 = 12;

if (hora3 == 12 || hora3 == 18) {
    document.getElementById('rush').innerHTML="HORA DO RUSH";
}
// Esta versão é algo apenas para descobrir se está ou não na hora do rush


/*Tipos de vaiaveis
var = Pode ser usada de maneira global
let = Pode ser usada apaenas no escopo/lugar em que ela foi criada
const = Não pode ser diretamente mudada
*/
