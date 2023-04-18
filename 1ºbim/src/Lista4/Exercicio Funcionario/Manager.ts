import { Employee } from "./Employee"

export class Manager extends Employee {
    protected bonus:number
    constructor (name: string, bonus: number, cpf:string, address:string, salary:number){
        super(name, cpf, address, salary)
        this.setBonus(bonus)
    }
    setBonus(bonus: number){
        this.bonus = bonus 
    }
    getBonus():number{
        return this.bonus
    }
    //Herdamos o toString() do Animal, mas ele não é suficiente 
    //Vamos anular o método toString() herdado 
    toString():string{
        return `
        ${super.toString()} 
        Bonus: ${this.bonus}
        `
    }
    calculateSalary(): void {
        console.log(`New salary: ${this.salary + this.bonus}`)
    }
}
