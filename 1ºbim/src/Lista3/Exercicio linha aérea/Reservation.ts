import { Flight } from "./Flight"
import { Passenger } from "./Passenger"

class Reservation {
    private id:number 
    private date: Date
    private passenger:Passenger
    private flight:Flight
    constructor (id:number, date:Date, passenger:Passenger, flight:Flight){
        this.setId(id)
        this.setDate(date)
        this.setPassenger(passenger)
        this.setFlight(flight)
    }
    setId(id:number){
        if(id>=0){
            this.id = id
        }
    }
    setDate(date:Date){
        this.date = date
    }
    setPassenger(passenger:Passenger){
        this.passenger = passenger
    }
    setFlight(flight:Flight){
        this.flight = flight
    }
    getId():number{
        return this.id
    }
    getDate():Date{
        return this.date
    }
    getflight():Flight{
        return this.flight
    }
    getpassenger():Passenger{
        return this.passenger
    }
    toString():string{
        return `
        Booking Information:
        id: ${this.id}
        Date: ${this.date}
        Passenger: ${this.passenger}
        Flight: ${this.flight}`

    }

}

let obj1passenger = new Passenger(1, 'Pedro', '12345678900')
let obj2passenger = new Passenger(2, 'João', '12345678911')

let obj1flight = new Flight(1, 'São Paulo', 'Punta Cana' )
let obj2flight = new Flight(2, 'Lima', 'Bangkok')

let obj1reservation = new Reservation(1, new Date(), obj1passenger, obj1flight)
let obj2reservation = new Reservation(2, new Date(), obj2passenger, obj2flight)

console.log(obj1reservation.toString())
console.log(obj2reservation.toString())




