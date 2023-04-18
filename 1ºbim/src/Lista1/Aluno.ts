class Aluno{
    numeroAluno: number;
    nome: string;
    idade: number; 
    p1: number;
    p2: number;
    media: number;
    resultado: string;
    notaFinal(){
        this.media = (this.p1 + this.p2)/2
        console.log(this.media)
    }
    dadosAluno(){
        return (
            console.log(`
            Número Aluno: ${this.numeroAluno}
            Nome: ${this.nome}
            Idade: ${this.idade}
            `)
            
        )
    }
    passou(){
        this.notaFinal();
        this.resultado = this.media > 6? 'Aprovado' : 'Reprovado'
        console.log(this.resultado)
    }
}



let aluno1 = new Aluno()
aluno1.nome = 'Jose'
aluno1.numeroAluno = 123
aluno1.idade = 30
aluno1.p1 = 6
aluno1.p2 = 8
console.log(aluno1.passou())
aluno1.notaFinal()
aluno1.dadosAluno()

