//O ID da tecla enter é 13
function digitou(e) {// Função recebendo a tecla como parâmetro
   if(e.keyCode == 13) {// verificação se o enter for digitado via ID da tecla precionada

        let texto = document.getElementById("digit").value;
        //Se o enter tiver sido pressionado, pegue todos os valores dentro da caixa
        //e coloque tudo dentro de uma variável

        console.log(texto)// Imprima a variável com as informações digitadas
    }
}

