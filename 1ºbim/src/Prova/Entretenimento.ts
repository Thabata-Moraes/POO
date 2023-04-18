
export abstract class Entretenimento {
    protected tipo:string
    constructor ( tipo:string){
        this.setTipo(tipo)
    }
    setTipo(tipo:string):void{
        this.tipo = tipo
    }
    gettipo():string{
        return this.tipo
    }
    mostra():string{
        return ` 
        Tipo de entretenimento: ${this.tipo}
    `
    }
}

