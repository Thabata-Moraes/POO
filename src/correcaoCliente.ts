class correcaoCliente{
    public numeroConta: number;
    public numeroAgencia: number;
    public nome: string;
    public saldo: number;

    constructor(numeroConta: number, numeroAgencia: number, nome: string, saldo: number){
        this.numeroConta = numeroConta
        this.numeroAgencia = numeroAgencia
        this.nome = nome
        this.saldo = saldo
    }
    realizarDeposito(valor:number):void{
        this.saldo = this.saldo + valor  
    }
    realizarSaque(valor:number):void{
        this.saldo = this.saldo - valor
    }
    dadosCliente():string{
        return(
                `
                Número Conta: ${this.numeroConta}
                Nome: ${this.nome}
                Saldo: ${this.saldo}
                `
        )
    }
}

let ccliente1 = new correcaoCliente(123, 80,'Tonho', 1200)

let ccliente2 = new correcaoCliente(123, 28, 'Creiton', 10000)

console.log(ccliente1.dadosCliente())
ccliente1.realizarDeposito(80)
ccliente1.realizarSaque(20)
console.log(ccliente1.dadosCliente())

console.log(ccliente2.dadosCliente())
ccliente2.realizarDeposito(2000)
ccliente2.realizarSaque(1500)
console.log(ccliente2.dadosCliente())


