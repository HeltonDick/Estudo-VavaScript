let dia = 2;// variável dia recebendo o valor 2
let diaNome = '';// variável que recebe o dia da semana

//Várias condições( CASOS ) que surgem a partir de um valor
switch(dia) {// Sendo esse valor, a variável dia
    case 1:// Caso 1
        diaNome = 'Segunda-Feira';
        break// Precisa do break para travar o primeiro caso e passar para o próximo caso
    case 2:// Se a variável dia é igual a 2, então utilize o caso 2
        diaNome = 'Terça-Feira';
        break
    case 3: 
        diaNome = 'Quarta-Feira';
        break
    case 4:
        diaNome = 'Quinta-Feira';
        break
    case 5:
        diaNome = 'Sexta-Feira';
        break
    case 6:
        diaNome = 'Sabado';
        break
    case 7:
        diaNome = 'Domingo'
        break
};
document.querySelector('#mudar').innerHTML="Hoje é " + diaNome;
//Celecione o texto com o id "mudar" e mude para o valor que a variavel "diaNome" recebeu

