class Carro {
    // declaração das variáveis 
    modelo: string;
    velocidade: number;
    motor: boolean; 
    
    ligar(){
        this.motor = true;
    }
    
    desligar(){
        this.motor =  false;
    }

    acelerar(qtde: number){
        this.velocidade = this.velocidade + qtde
    }

    desacelerar(qtde: number){
        this.velocidade = this.velocidade - qtde
    }
}

// cria objetos - instanciar as classes 
let obj1 = new Carro()
obj1.modelo = "Onix"
obj1.velocidade = 0
obj1.motor = false 

let obj2 = new Carro()
obj2.modelo = "Gol"
obj2.velocidade = 60
obj2.motor = true 

//console.log(obj1)


console.log(obj2)

obj2.desligar()
obj2.velocidade = 0 

console.log(obj2)