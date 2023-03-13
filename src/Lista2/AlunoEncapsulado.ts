class AlunoEncapsulado{
  private numeroAluno: number;
  private nome: string;
  private idade: number; 
  private p1: number;
  private p2: number;

    constructor (numeroAluno:number, nome:string, idade:number, p1:number, p2:number){
        this.setNumeroAluno(numeroAluno)
        this.setNome(nome)
        this.setIdade(idade) 
        this.setP1(p1)
        this.setP2(p2)
    }
    setNumeroAluno(numeroAluno:number):void{
        //aux é uma variável local ao método que converte o número do aluno para string 
        let aux = numeroAluno.toString()
        if (aux.length == 6){
            this.numeroAluno = numeroAluno
        } else {
            this.numeroAluno = 0
            console.log('Número não se adequa aos padrões, reveja')
        }
    }
    setNome(nome:string):void{
        if (nome.length <= 30){
            this.nome = nome
        } else {
            this.nome = 'Não definido'
            console.log('O nome digitado estrapola os caracteres')
        }
    }
    setIdade(idade:number):void{
        (idade>0)? (this.idade = idade) : (this.idade = 0, console.log('Idade improvável, reveja'))
    }
    setP1(p1:number):void{
        (p1>=0)? (this.p1 = p1) : (this.p1 = 0, console.log('Nota improvável, reveja'))
    }
    setP2(p2:number):void{
        (p2>=0)? (this.p2 = p2) : (this.p2 = 0, console.log('Nota improvável, reveja'))
    }
    getNumeroAluno():number{
        return this.numeroAluno
    }
    getNome():string{
        return this.nome
    }
    getIdade():number{
        return this.idade
    }
    getP1():number{
        return this.p1
    }
    getP2():number{
        return this.p2
    }
    notaFinal():number{
        return (this.getP1() + this.getP2())/2
    }
    passou():string{
        return(this.notaFinal()>=6? 'Aluno passou': 'Aluno não passou') 
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
    
}



let ealuno1 = new AlunoEncapsulado(123658, 'José', 30, 6, 8)

let ealuno2 = new AlunoEncapsulado(8, 'Artur', 52, 6, 10)

console.log(ealuno1.dadosAluno())
console.log(ealuno2.dadosAluno())
