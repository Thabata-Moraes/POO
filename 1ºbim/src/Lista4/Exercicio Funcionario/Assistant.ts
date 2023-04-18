import { Employee } from "./Employee"

export class Assistant extends Employee {
    protected extraHour: number
    constructor (name: string, extraHour: number, cpf:string, address:string, salary:number){
        super(name, cpf, address, salary)
        this.setExtraHour(extraHour)
    }
    setExtraHour(extraHour: number){
        this.extraHour = extraHour 
    }
    getExtraHour():number{
        return this.extraHour
    }
    //Herdamos o toString() do Animal, mas ele não é suficiente 
    //Vamos anular o método toString() herdado 
    toString():string{
        return `
        ${super.toString()} 
        extraoHour: ${this.extraHour}
        `
    }
    calculateSalary(): void {
        console.log(`New salary: ${this.salary + (this.extraHour*50)}`)
    }
}
