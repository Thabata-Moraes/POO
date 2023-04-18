import { Animal } from "./Animal"

export class Snake extends Animal {
    protected poisonous:boolean
    constructor (name: string, poisonous: boolean){
        super(name)
        this.setPoisonous(poisonous)
    }
    setPoisonous(poisonous: boolean){
        this.poisonous = poisonous 
    }
    getPoisonous():boolean{
        return this.poisonous
    }
    //Herdamos o toString() do Animal, mas ele não é suficiente 
    //Vamos anular o método toString() herdado 
    toString():string{
        return `
        ${super.toString()} 
        Poisonous: ${this.poisonous? "Yes" : "No"}
        `
    }
    move(): string {
        return 'Snake is crawling'
    }
}
