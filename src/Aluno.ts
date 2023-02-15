class Aluno{
    numeroAluno: number;
    nome: string;
    idade: number; 
    p1: number;
    p2: number;
    media: number
    notaFinal(){
        this.media = (this.p1 + this.p2)/2
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
}

let aluno1 = new Aluno()
aluno1.nome = 'Jose'
aluno1.numeroAluno = 123
aluno1.idade = 30
aluno1.dadosAluno()