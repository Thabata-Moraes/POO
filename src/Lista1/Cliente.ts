class Cliente{
    numeroConta: number;
    numeroAgencia: number;
    nome: string;
    saldo: number;
    realizarDeposito(valor:number){
        this.saldo = this.saldo + valor  
    }
    realizarSaque(valor:number){
        this.saldo = this.saldo - valor
    }
    dadosCliente(){
        console.log(`
            Número Conta: ${this.numeroConta}
            Nome: ${this.nome}
            Saldo: ${this.saldo}
            `)
    }
}

let cliente1 = new Cliente()
cliente1.numeroAgencia = 123
cliente1.nome = 'Tonho'
cliente1.numeroConta = 80
cliente1.saldo = 1200

let cliente2 = new Cliente()
cliente2.numeroAgencia = 123
cliente2.nome = 'Creiton'
cliente2.numeroConta = 28
cliente2.saldo = 10000

cliente1.dadosCliente()
cliente1.realizarDeposito(80)
cliente1.realizarSaque(20)
cliente1.dadosCliente()

cliente2.dadosCliente()
cliente2.realizarDeposito(2000)
cliente2.realizarSaque(1500)
cliente2.dadosCliente()


