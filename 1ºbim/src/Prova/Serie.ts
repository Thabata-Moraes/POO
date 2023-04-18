import { Entretenimento } from "./Entretenimento"

export class Serie extends Entretenimento {
    protected episodios:number
    constructor (tipo: string, episodios:number){
        super(tipo)
        this.setEpisodios(episodios)
    }
    setEpisodios(episodios: number){
        this.episodios = episodios 
    }
    getEpisodios():number{
        return this.episodios
    }
    mostra():string{
        return `
        ${super.mostra()} 
        Quantidade total de pisodios: ${this.episodios}
        `
    }
}
