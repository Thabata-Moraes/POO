class ClienteBanco{
    public numeroConta: string;
    public numeroAgencia: string;
    public nome: string;
    public saldo: number;

    constructor(numeroConta: string, numeroAgencia: string, nome: string, saldo: number){
        this.setNumeroConta(numeroConta)
        this.setNumeroAgencia(numeroAgencia)
        this.setNome(nome)
        this.setSaldo(saldo)
    }
    realizarDeposito(valor:number):void{
        this.saldo = this.saldo + valor  
    }
    realizarSaque(valor:number):void{
        this.setSaldo(this.saldo-valor)
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
    setNumeroConta(numeroConta:string): void{
        if (numeroConta.length == 8 && numeroConta.charAt(6) == '-'){
            this.numeroConta = numeroConta
        } else {
            console.log ('Dados incorretos')
        }
    }
    setNumeroAgencia(numeroAgencia:string): void{
        this.numeroAgencia = numeroAgencia
    }
    setNome(nome:string):void{
        if 
    }
    setSaldo(saldo:number): void{
        if (saldo >= 0){
            this.saldo = saldo
        } else {
            this.saldo = 0
            console.log ('Valor de saldo não pode ser negativo')
        }
    }
    getSaldo(): number{
        return this.saldo
    }
}

let ClienteBanco1 = new ClienteBanco('12345-9', '80','Tonho', 1200)

//let ClienteBanco2 = new ClienteBanco(123, 28, 'Creiton', 10000)

console.log(ClienteBanco1.dadosCliente())
ClienteBanco1.realizarDeposito(80)
ClienteBanco1.realizarSaque(20)
console.log(ClienteBanco1.dadosCliente())

//console.log(ClienteBanco2.dadosCliente())
//ClienteBanco2.realizarDeposito(2000)
//ClienteBanco2.realizarSaque(1500)
//console.log(ClienteBanco2.dadosCliente())


