let timer;

function comecar() {
    timer = setInterval(mostraTime, 100);
}

function parar() {
    clearInterval(timer);//Esse aq "cancela" o intervalo
}

function mostraTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let tempo = h+":"+m+":"+s;

    document.querySelector('#demo').innerHTML = tempo;
    //ESSA FUNÇÃO EXISTE POREM NÃO É RODADA
}

//introdução a timer
//  let timer = setInterval(mostraTime, 1000); //esse timer seta um intervalo de 1000 mile segundos (1 segundo) para que a função seja executada