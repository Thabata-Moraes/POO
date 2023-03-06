class correcaoProduto{
    public id: number;
    public description: string;
    public amount: number; 
    public price: number;
    
    constructor(id: number, description: string, amount: number, price: number){
            this.id = id
            this.description = description
            this.amount = amount
            this.price = price 

    }
    buy(n:number):void{
        this.amount = this.amount + n
    }
    sell(n:number):void{
        this.amount = this.amount - n
    }
    increase(n:number):void{
        this.price = this.price + n
    }
    decrease(n:number):void{
        this.price = this.price - n
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
}

let cproduct1 = new correcaoProduto(123, 'blue bottle', 4, 25)
let cproduct2 = new correcaoProduto(321, 'green bottle', 6, 25)

console.log(cproduct1.display())
console.log(cproduct2.display())
cproduct1.buy(2)
cproduct2.sell(4)
cproduct1.increase(5)
cproduct2.decrease(10)
console.log(cproduct1.display())
console.log(cproduct2.display())
