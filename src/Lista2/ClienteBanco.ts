class ClienteBanco{
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
    realizarDeposito(valor:number):void{
        this.saldo = this.saldo + valor  
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
    setNumeroConta(numeroConta:string): void{
        if (numeroConta.length == 7 && numeroConta.charAt(5) == '-'){
            this.numeroConta = numeroConta
        } else {
            this.numeroConta = '00000-00'
            console.log ('Dados incorretos')
        }
    }
    setNumeroAgencia(numeroAgencia:string): void{
        if ((numeroAgencia.length == 5) && (numeroAgencia.charAt(3) == '-')){
            this.numeroAgencia = numeroAgencia
        } else {
            this.numeroAgencia = '00000-00'
            console.log ('Dados incorretos')
        }
    }
    setNome(nome:string):void{
        if (nome.length <= 30){
            this.nome = nome
        } else {
            console.log('O nome digitado estrapola os carecteres')
        }
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
    getNumeroAgencia(): string{
        return this.numeroAgencia
    }
    getNumeroConta(): string{
        return this.numeroConta
    }
    getNome(): string{
        return this.nome
    }
}

let ClienteBanco1 = new ClienteBanco('12345-98', '234-65','Tonho', 1200)

//let ClienteBanco2 = new ClienteBanco(123, 28, 'Creiton', 10000)

console.log(ClienteBanco1.dadosCliente())
//ClienteBanco1.realizarDeposito(80)
//ClienteBanco1.realizarSaque(20)
//console.log(ClienteBanco1.dadosCliente())

//console.log(ClienteBanco2.dadosCliente())
//ClienteBanco2.realizarDeposito(2000)
//ClienteBanco2.realizarSaque(1500)
//console.log(ClienteBanco2.dadosCliente())


