class Product{
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

let product1 = new Product()
product1.id = 123
product1.description = "blue bottle"
product1.amount = 4
product1.price = 25

let product2 = new Product()
product2.id = 321
product2.description = "green bottle"
product2.amount = 6
product2.price = 25

product1.display()
product2.display()
product1.buy(2)
product2.sell(4)
product1.increase(5)
product2.decrease(10)
product1.display()
product2.display()
