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
    getName():string{
        return this.name
    }
    //converte um objeto em string
    toString(): string{
        return `Name: ${this.name} Price ${this.price}`
    }
}

class CarItem{// classe TODO para a associação com o produto e classe PARTE para a associação com ShoppingCart 
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
    // converte objeto em string
    toString():string{
        return `Produto ${this.product.toString()} Quantidade: ${this.quantity}`
    }
}

class ShoppingCart {
    private id:number
    private carItens: CarItem[]; //composição com vetor
    constructor(id:number){
        this.id = id
        this.carItens = [] //inicializa vetor com vazio
    }
    addCarItem(carItem: CarItem){
        this.carItens.push(carItem); //adc 1 item no array do carrinho 
    }
    //converte obj em string
    toString(){
        let saidaVetor = ''
        for(let i=0; i < this.carItens.length; i++){
            saidaVetor = saidaVetor + "\n" + this.carItens[i].toString() 
        }
        return `ID: ${this.id} Itens do carrinho: ${saidaVetor}`
    }
}

let product1 = new Product('Alexa',400);
let product2 = new Product('Auto-falante JBL', 150);
let obj1CarItem = new CarItem(product1, 2);
console.log(`Preço total do item: ${obj1CarItem.calculateTotalPrice()}`)
let obj2CarItem = new CarItem(product2, 2);
console.log(`Preço total do item: ${obj2CarItem.calculateTotalPrice()}`)

//Criar carrinho de compra
let shoppingCar1 =  new ShoppingCart(1)
//Add produtos no carrinho 
shoppingCar1.addCarItem(obj1CarItem)
shoppingCar1.addCarItem(obj2CarItem)

console.log(shoppingCar1.toString())

