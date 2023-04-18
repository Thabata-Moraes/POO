import { Tel } from "./Tel"

export class Client {
    private id:number 
    private name:string 
    private cpf:string
    private tels:Tel[]
    constructor (id:number , name:string, cpf:string){
        this.setId(id)
        this.setName(name)
        this.setCPF(cpf)
        this.tels = [] 
    }
    setId(id:number){
        if(id>=0){
            this.id = id
        }
    }
    setName(name:string):void{
        this.name = name
    }
    setCPF(cpf:string):void{
        if(cpf.length == 11){
            this.cpf = cpf
        }
    }
    getId():number{
        return this.id
    }
    getName():string{
        return this.name
    }
    getCPF():string{
        return this.cpf 
    }
    getTel():Tel[]{
        return this.tels
    }
    toString():string{
        return `{id: ${this.id}
        Name: ${this.name} 
        CPF ${this.cpf}
        Tel ${this.tels}
        }`
    }
    addTel(tel:Tel):void{
        this.tels.push(tel); //adc 1 item no array do carrinho 
    }
}