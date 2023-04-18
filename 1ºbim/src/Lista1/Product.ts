class Produto{
    id: number;
    description: string;
    amount: number; 
    price: number;
    buy(n:number){
        this.amount = this.amount + n
        console.log(this.amount)
    }
    sell(n:number){
        this.amount = this.amount - n
        console.log(this.amount)
    }
    increase(n:number){
        this.price = this.price + n
        console.log(this.price)
    }
    decrease(n:number){
        this.price = this.price - n
        console.log(this.price)
    }
    display(){
        return (
            console.log(`
            Product ID: ${this.id}
            Description: ${this.description}
            Amount: ${this.amount}
            Price: ${this.price}
            `)  
        )
    }
}

let produto1 = new Produto()
produto1.id = 123
produto1.description = "blue bottle"
produto1.amount = 4
produto1.price = 25

let produto2 = new Produto()
produto2.id = 321
produto2.description = "green bottle"
produto2.amount = 6
produto2.price = 25

produto1.display()
produto2.display()
produto1.buy(2)
produto2.sell(4)
produto1.increase(5)
produto2.decrease(10)
produto1.display()
produto2.display()
