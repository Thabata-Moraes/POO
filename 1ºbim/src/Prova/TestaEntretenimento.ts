import { Entretenimento } from "./Entretenimento"
import { Filme } from "./Filme"
import { Serie } from "./Serie"

function criarEntretenimento(obj: Entretenimento):void{ 
    console.log(obj.mostra())
}

let obj1Filme = new Filme("Terror", 120)
let obj1Serie = new Serie("Drama", 10)


criarEntretenimento(obj1Filme)
criarEntretenimento(obj1Serie)