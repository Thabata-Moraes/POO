
export class Animal {
    protected name:string
    constructor (name: string){
        this.setName(name)
    }
    setName(name: string){
        this.name = name 
    }
    getName():string{
        return this.name
    }
    toString():string{
        return `
        Name: ${this.name}
        `    
    }
    move():string{
        return 'Animal is moving'
    }
}

