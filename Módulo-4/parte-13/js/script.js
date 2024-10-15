let timer;
function rodar() {
    //set time out = cetar um tempo, ele espera esse tempo roda a função e para ai
    timer = setTimeout(function() {
        alert("Rodou!!");
    } ,2000);//REALIZE TAL FUNÇÃO EM DOIS SEGUNDOS
}

function parar() {
    clearTimeout(timer);//"Antidoto" do TimeOut
}

