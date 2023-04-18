import { Curso } from "./Curso"
import { Disciplina } from "./Disciplina"

let obj1Curso = new Curso('Análise e Desenvolvimento de Sistemas')
let obj2Curso = new Curso('Enfermagem')

let obj1Disciplina = new Disciplina('Programação Orientada a Objetos')
obj1Curso.addDisciplina(obj1Disciplina)
let obj2Disciplina = new Disciplina('Anatomia')
obj2Curso.addDisciplina(obj2Disciplina)

let obj3Disciplina = new Disciplina('Programação Web')
obj1Curso.addDisciplina(obj3Disciplina)
let obj4Disciplina = new Disciplina('Bioquímica')
obj2Curso.addDisciplina(obj4Disciplina)

console.log(obj1Curso)
console.log(obj2Curso)

//As disciplinas dependem do curso, uma vez que, se o curso não mais forem ofertados, as disciplinas serão extinguidas. Um curso é composto por diversas disciplinas.