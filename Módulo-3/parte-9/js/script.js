let dia = 6;
let diaNome = '';

switch (dia) {
    case 6:
    case 7://funciona porque acaba sendo a amesma coisa
        diaNome = 'Final de semana';
        break;
    //case 7:                            T Se repete a mesma coiisa porem testa outro numero
        //diaNome = 'Final de semana';   |
        //break;                        _|
    default: //Se não for nada do que eu testei então diga isso como padrão
        diaNome = 'um Dia da semana';
        break;
};

document.querySelector('#muda').innerHTML="Hoje é " + diaNome;