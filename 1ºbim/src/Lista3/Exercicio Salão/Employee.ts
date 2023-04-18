export class Employee {
    private id:number 
    private name:string
    private number:number
    constructor (id:number , name:string, number:number){
        this.setId(id)
        this.setName(name)
        this.setNumber(number)
    }
    setId(id:number){
        if(id>=0){
            this.id = id
        }
    }
    setName(name:string):void{
        this.name = name
    }
    setNumber(number:number):void{
        if(number>0){
            this.number = number
        }
    }
    getId():number{
        return this.id
    }
    getName():string{
        return this.name
    }
    getNumber():number{
        return this.number 
    }
    toString():string{
        return `{id: ${this.id} 
        Name: ${this.name}
        Number: ${this.number}}`
    }
}