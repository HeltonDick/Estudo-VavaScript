/*
document.querySelector('#txt1').offsetHeight
document.querySelector('#txt1').offsetWidth

document.querySelector('#txt2').clientWitdh
document.querySelector('#txt2').clientHeight

document.querySelector('#txt3').scrollWidth
document.querySelector('#txt3').scrollHeight
*/

function subir() {
    //window.scrollTo(0, 0) Muito duro e direto
    window.scrollTo({
        top: 0,
        //left: 0, Caso tenha como ir de um lado para o outro
        behavior: "smooth"
    });
}

//Atividade, a div i botão não pode aparecer no começo
function aparecer() {
    if (window.scrollY === 0) {
        document.querySelector('.scroll-button').style.display = 'none'
    }
    else {
        document.querySelector('.scroll-button').style.display = 'block'
    }
}

document.addEventListener('scroll', aparecer);