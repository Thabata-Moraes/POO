import { Entretenimento } from "./Entretenimento"

export class Filme extends Entretenimento {
    protected duracao:number
    constructor (tipo: string, duracao:number){
        super(tipo)
        this.setDuracao(duracao)
    }
    setDuracao(duracao: number){
        this.duracao = duracao 
    }
    getDuracao():number{
        return this.duracao
    }
    mostra():string{
        return `
        ${super.mostra()} 
        duracao em minutos: ${this.duracao}
        `
    }
}
