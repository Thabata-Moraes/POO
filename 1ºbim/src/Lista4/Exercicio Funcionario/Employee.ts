// classe abstract não pode ser instanciada, uma vez que não vale a pena criar funcionário sem saber qual setor ele faz parte, cria nas classes filhas 
// classe abstract pode ter métodos abstratos (torna obrigatório implementar elas nas classes filhas, e não é iplementado no pai) 
export abstract class Employee {
    protected name:string
    protected address:string
    protected salary:number
    protected cpf:string
    constructor ( name:string, cpf:string, address:string, salary:number){
        this.setName(name)
        this.setAddress(address)
        this.setSalary(salary)
        this.setCPF(cpf)
    }
    setName(name:string):void{
        this.name = name
    }
    setAddress(address:string):void{
        this.address = address
    }
    setSalary(salary:number):void{
        if(salary>0){
            this.salary = salary
        }
    }
    setCPF(cpf:string):void{
        this.cpf = cpf
    }
    getAddress():string{
        return this.address
    }
    getName():string{
        return this.name
    }
    getSalary():number{
        return this.salary 
    }
    getCPF():string{
        return this.cpf 
    }
    toString():string{
        return ` 
        Name: ${this.name}
        Salary: ${this.salary}
        CPF: ${this.cpf}
        Address: ${this.address}
    `
    }
    abstract calculateSalary():void;
}

