class Product { //classe parte
    private name: string;
    private price: number;
    constructor(name:string, preco:number){
        this.setName(name)
        this.setPrice(preco)
    }
    setName(name:string):void{
        this.name = name
    }
    setPrice(price:number):void{
        (price>0)? (this.price = price) : (this.price = 0, console.log('Preço improvável, reveja'))
    }
    getPrice():number{
        return this.price
    }
}

class CarItem{// classe todo
    private product: Product //agregação
    private quantity: number 
    constructor(product: Product, quantity:number){
        this.product = product;
        this.quantity = quantity
    }
    // calcula preço final
    calculateTotalPrice():number{
        return this.quantity *  this.product.getPrice() 
    }
}