class correcaoAluno{
    numeroAluno: number;
    nome: string;
    idade: number; 
    p1: number;
    p2: number;

    constructor (numeroAluno:number, nome:string, idade:number, p1:number, p2:number){
        this.numeroAluno = numeroAluno
        this.nome = nome
        this.idade = idade; 
        this.p1 = p1
        this.p2 = p2
    }
    notaFinal():number{
        return (this.p1 + this.p2)/2
    }
    dadosAluno():string{
        return (
            (`
            Número Aluno: ${this.numeroAluno}
            Nome: ${this.nome}
            Idade: ${this.idade}
            Nota final: ${this.notaFinal()}
            Situação: ${this.passou()}
            `)
            
        )
    }
    passou():string{
        return(this.notaFinal()>=6? 'Aluno passou': 'Aluno não passou') 
    }
}



let caluno1 = new correcaoAluno()
caluno1.nome = 'Jose'
caluno1.numeroAluno = 123
caluno1.idade = 30
caluno1.p1 = 6
caluno1.p2 = 8

let caluno2 = new correcaoAluno(12, 'Artur', 52, 6, 10)

console.log(caluno1.dadosAluno())
console.log(caluno2.dadosAluno())
