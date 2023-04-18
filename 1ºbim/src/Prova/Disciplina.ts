export class Disciplina {
    private disciplina: string
    constructor(disciplina: string){
        this.setDisciplina(disciplina)
    }
    setDisciplina(disciplina:string):void{
        this.disciplina = disciplina
    }
    getdisciplina():string{
        return this.disciplina
    }
    toString():string{
        return `${this.disciplina}`
    }
}