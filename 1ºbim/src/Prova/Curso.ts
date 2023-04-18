import { Disciplina } from "./Disciplina"

export class Curso {
    private name:string 
    private disciplinas: Disciplina[]
    constructor (name:string){
        this.setName(name)
        this.disciplinas = [] 
    }
    setName(name:string):void{
        this.name = name
    }
    getName():string{
        return this.name
    }
    getDisciplina():Disciplina[]{
        return this.disciplinas
    }
    toString():string{
        return `
        Nome do curso: ${this.name} 
        Disciplinas: ${this.disciplinas}`
    }
    addDisciplina(disciplina:Disciplina):void{
        this.disciplinas.push(disciplina); 
    }
}