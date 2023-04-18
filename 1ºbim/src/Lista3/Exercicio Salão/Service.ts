export class Service {
    private id:number
    private name:string
    private price:number
    constructor ( id:number ,  name:string,  price:number){
        this.setId(id)
        this.setName(name)
        this.setPrice(price)
    }
    setId(id:number){
        if(id>=0){
            this.id = id
        }
    }
    setName(name:string):void{
        this.name = name
    }
    setPrice(price:number):void{
        if(price>0){
            this.price = price
        }
    }
    getId():number{
        return this.id
    }
    getName():string{
        return this.name
    }
    getPrice():number{
        return this.price 
    }
    toString():string{
        return `{id: ${this.id}
        Name: ${this.name}
        Price: ${this.price}}`
    }
}