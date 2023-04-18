import { Animal } from "./Animal"
import { Horse } from "./Horse"
import { Snake } from "./Snake"

//Vamos instanciar os objetos 

let obj1Snake = new Snake('Jujuba', true)
// console.log(obj1Snake.toString())
// console.log(obj1Snake.move())

let obj1Horse = new Horse('Geleia', true)
// console.log(obj1Horse.toString())
// console.log(obj1Horse.move())

let obj2Snake = new Snake('Jay-z', false)
// console.log(obj2Snake.toString())
// console.log(obj2Snake.move())

let obj2Horse = new Horse('Terêncio', false)
// console.log(obj2Horse.toString())
// console.log(obj2Horse.move())

//Função exemplo de polimorfismo 
function exemploPolimorfismo(obj: Animal):void{
    //roda as funções da classe filha passada como obj e não da classe pai Animal 
    console.log(obj.toString())
    console.log(obj.move())
}

exemploPolimorfismo(obj1Snake)
exemploPolimorfismo(obj2Snake)
exemploPolimorfismo(obj1Horse)
exemploPolimorfismo(obj2Horse)



