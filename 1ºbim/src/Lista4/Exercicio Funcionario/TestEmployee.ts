import { Assistant } from "./Assistant"
import { Employee } from "./Employee"
import { Manager } from "./Manager"
import { Director } from "./Director"

function createEmployee(obj: Employee):void{
    //roda as funções da classe filha passada como obj e não da classe pai Animal 
    console.log(obj.toString())
    obj.calculateSalary()
}

let obj1Assistant = new Assistant("Valdir", 20, "234354545", "R. da Solidão", 1500)
let obj1Manager = new Manager("Kátia", 2000, "567653", "R. da Depressão", 3000)
let obj1Director = new Director("Beyonce", 50, "23435dsa", "R. dos Insensiveis", 10000)

createEmployee(obj1Assistant)
createEmployee(obj1Manager)
createEmployee(obj1Director)
