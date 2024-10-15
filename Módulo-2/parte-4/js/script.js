function trocar(nomeIMG, descIMG) {// Parâmetros que vieram da aba html, sendo o nome da imagem e a descrição
    document.querySelector('img').setAttribute('src', 'img/'+nomeIMG)
    // Após selecionar a tag "imagem", colocamos o atributo "src" de imagem, selecionando a pasta imagem e concatenando com o nome da imagem

    document.querySelector('img').setAttribute('alt', descIMG)
    // Após selecionar a tag "imagem", colocamos no lugar de descrição o parâmetro carregado pela função

}
function oque() {
    let coisa = document.querySelector('img').getAttribute('alt');
    // Função que seleciona a descrição da tag "imagem" selecionada e coloca dentro de uma variável
    alert('O objeto é um '+coisa);// Por último, imprimimos a descrição da imagem para então saber que imagem é
}

