//A criação de um objeto é marcada pelo uso de chaves
let carro = {
    nome:'Fiat',
    modelo:'Uno',
    peso:'800kg'
}
console.log("O carro é um "+ carro.nome + " modelo "+ carro.modelo + " com um peso de "+carro.peso) 
//As palavras estão concatenadas a seleção do "nome" que está dentro do objeto "carro"



let moto = {
    nome: 'Ninja',
    modelo: 'Kawasaki-250',
    peso: '150kg',
    ligando:false,
    ligar:function() {//Cranções de uma função dentro dentro de um objeto. Primeiro o nome da função e em seguida o function
        this.ligado = true;
        window.alert("asdasdasdashdasdbbfrsdsdf!!!!!");
    },
    acelerar:function() {
        if(this.ligado == true) {
            window.alert("vrum VRUMMMMMMMMMMM ahhh VRUMMMMMMMMM");
        }
        else {
            window.alert(this.nome+" "+this.modelo+" Carro não está ligado");
        }
    }
};

console.log("Modelo "+carro.modelo);

carro.ligar();
carro.acelerar();