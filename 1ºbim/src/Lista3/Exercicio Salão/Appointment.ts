import { Service } from "./Service"
import { Client } from "./Client"
import { Employee } from "./Employee"
import { Tel } from "./Tel"

class Appointment {
    private id:number 
    private date: Date
    private client:Client
    private service:Service
    private employee: Employee
    constructor (id:number, date:Date, client:Client, service:Service, employee: Employee){
        this.setId(id)
        this.setDate(date)
        this.setClient(client)
        this.setService(service)
        this.setEmployee(employee)
    }
    setId(id:number){
        if(id>=0){
            this.id = id
        }
    }
    setDate(date:Date){
        this.date = date
    }
    setClient(client:Client){
        this.client = client
    }
    setService(service:Service){
        this.service = service
    }
    setEmployee(employee:Employee){
        this.employee = employee
    }
    getId():number{
        return this.id
    }
    getDate():Date{
        return this.date
    }
    getService():Service{
        return this.service
    }
    getClient():Client{
        return this.client
    }
    getEmployee():Employee{
        return this.employee
    }
    toString():string{
        return `
        {id: ${this.id}
        Date${this.date}
        Client ${this.client}
        Employee: ${this.employee}
        Service: ${this.service}}`

    }

}

let obj1Client = new Client(1, 'Pedro', '12345678900')
let obj2Client = new Client(2, 'João', '12345678911')

let obj1Employee = new Employee(1, 'Bruno', 500)
let obj2Employee = new Employee(2,'Carlos', 600)

let obj1Service = new Service(1, 'Escova', 100)
let obj2Service = new Service(2, 'Corte', 60)

let obj1Appointment = new Appointment(1, new Date(), obj1Client, obj1Service, obj1Employee)
let obj2Appointment = new Appointment(2, new Date(), obj2Client, obj2Service, obj2Employee)

console.log(obj1Appointment.toString())
console.log(obj2Appointment.toString())


console.log(obj1Appointment.getService().getPrice())
console.log(obj2Appointment.getEmployee().getName())
console.log(obj2Appointment.getClient().getCPF())

let obj1Tel = new Tel(1, 45648, 'tim')
obj1Client.addTel(obj1Tel)
let obj2Tel = new Tel(2, 45645, 'claro')
obj1Client.addTel(obj2Tel)

console.log(obj1Client)


