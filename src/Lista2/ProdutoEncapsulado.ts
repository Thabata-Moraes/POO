class ProdutoEncapsulado{
    private id: number;
    private description: string;
    private amount: number; 
    private price: number;
    
    constructor(id: number, description: string, amount: number, price: number){
            this.id = id
            this.description = description
            this.setQtde(amount)
            this.setPreco(price)

    }
    buy(n:number):void{
        this.amount = this.amount + n
    }
    sell(n:number):void{
        this.setQtde(this.amount-n)
    }
    increase(n:number):void{
        this.price = this.price + n
    }
    decrease(n:number):void{
        this.setPreco(this.price-n)
    }
    display():string{
        return (
            `
            Product ID: ${this.id}
            Description: ${this.description}
            Amount: ${this.amount}
            Price: ${this.price}
            `  
        )
    }
    setQtde(qtde:number): void{
        if (qtde>= 0){
            this.amount = qtde
        }else {
            this.amount = 0 
            console.log('Valor de quantidade não pode ser negativo')
        }
    }
    setPreco(preco:number): void{
        if (preco>= 0){
            this.price = preco
        }else {
            this.price = 0 
            console.log('Valor de preço não pode ser negativo')
        }
    }
    getQtde(): number{
        return this.amount
    }
    getPreco(): number {
        return this.price
    }
}

let ObjetoEncapsulado1 = new ProdutoEncapsulado(123, 'blue bottle', 4, 25)
let ObjetoEncapsulado2 = new ProdutoEncapsulado(321, 'green bottle', 6, 25)

console.log(ObjetoEncapsulado1.display())
console.log(ObjetoEncapsulado2.display())
ObjetoEncapsulado1.buy(2)
ObjetoEncapsulado2.sell(4)
ObjetoEncapsulado1.increase(5)
ObjetoEncapsulado2.decrease(10)
console.log(ObjetoEncapsulado1.display())
console.log(ObjetoEncapsulado2.display())

ObjetoEncapsulado2.setQtde(-2)
ObjetoEncapsulado1.setPreco(-80)
ObjetoEncapsulado2.setQtde(8)
console.log(ObjetoEncapsulado2.display())

let ObjetoEncapsulado3 = new ProdutoEncapsulado(321, 'green bottle', -6, 25)
console.log(ObjetoEncapsulado3.display())