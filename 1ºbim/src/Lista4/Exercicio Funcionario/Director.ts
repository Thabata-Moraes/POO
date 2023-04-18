import { Employee } from "./Employee"

export class Director extends Employee {
    protected companyShares:number
    constructor (name: string, companyShares: number, cpf:string, address:string, salary:number){
        super(name, cpf, address, salary)
        this.setCompanyShares(companyShares)
    }
    setCompanyShares(companyShares: number){
        this.companyShares = companyShares 
    }
    getcompanyShares():number{
        return this.companyShares
    }
    toString():string{
        return `
        ${super.toString()}
        Company Shares: ${this.companyShares}
        `
    }
    calculateSalary(): void {
        console.log(`New salary: ${this.salary + (this.companyShares*1000)}`)
    }
}

