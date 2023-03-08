class ClienteEncapsulado{
    private numeroConta: string;
    private numeroAgencia: string;
    private nome: string;
    private saldo: number;

    constructor(numeroConta: string, numeroAgencia: string, nome: string, saldo: number){
        this.setNumeroConta(numeroConta)
        this.setNumeroAgencia(numeroAgencia)
        this.setNome(nome)
        this.setSaldo(saldo)
    }

    setNumeroConta(numeroConta:string): void{
        if (numeroConta.length == 8 && numeroConta.charAt(6) == '-'){
            this.numeroConta = numeroConta
        } else {
            this.numeroConta = '00000-00'
            console.log ('Dados incorretos')
        }
    }
    setNumeroAgencia(numeroAgencia:string): void{
        if ((numeroAgencia.length == 6) && (numeroAgencia.charAt(4) == '-')){
            this.numeroAgencia = numeroAgencia
        } else {
            this.numeroAgencia = '0000-0'
            console.log ('Dados incorretos')
        }
    }
    setNome(nome:string):void{
        if (nome.length <= 30){
            this.nome = nome
        } else {
            this.nome = ''
            console.log('O nome digitado estrapola os caracteres')
        }
    }
    setSaldo(saldo:number): void{
        if (saldo >= 0){
            this.saldo = saldo
        } else {
            this.saldo = 0
            console.log ('Saldo insuficiente')
        }
    }

    getSaldo(): number{
        return this.saldo
    }
    getNumeroAgencia(): string{
        return this.numeroAgencia
    }
    getNumeroConta(): string{
        return this.numeroConta
    }
    getNome(): string{
        return this.nome
    }

    realizarDeposito(valor:number):void{
        this.setSaldo(this.saldo+valor)
    }
    realizarSaque(valor:number):void{
        this.setSaldo(this.saldo-valor)
    }
    dadosCliente():string{
        return(
                `
                Número Agência: ${this.numeroAgencia}
                Número Conta: ${this.numeroConta}
                Nome: ${this.nome}
                Saldo: ${this.saldo}
                `
        )
    }
   
}

let ClienteEncapsulado1 = new ClienteEncapsulado('123459-8', '2346-5','Tonho', 1200)

//let ClienteEncapsulado2 = new ClienteEncapsulado(123, 28, 'Creiton', 10000)

console.log(ClienteEncapsulado1.dadosCliente())
//ClienteEncapsulado1.realizarDeposito(80)
//ClienteEncapsulado1.realizarSaque(20)
//console.log(ClienteEncapsulado1.dadosCliente())

//console.log(ClienteEncapsulado2.dadosCliente())
//ClienteEncapsulado2.realizarDeposito(2000)
//ClienteEncapsulado2.realizarSaque(1500)
//console.log(ClienteEncapsulado2.dadosCliente())


