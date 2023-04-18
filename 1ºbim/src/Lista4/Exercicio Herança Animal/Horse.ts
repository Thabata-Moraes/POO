import { Animal } from "./Animal"

export class Horse extends Animal {
    protected competitor:boolean
    constructor (name: string, competitor: boolean){
        super(name)
        this.setCompetitor(competitor)
    }
    setCompetitor(competitor: boolean){
        this.competitor = competitor 
    }
    getcompetitor():boolean{
        return this.competitor
    }
    toString():string{
        return `
        ${super.toString()}
        Competitor: ${this.competitor? 'Yes' : 'No'}
        `
    }
    move(): string {
        return 'Horse is trotting'
    }
}

