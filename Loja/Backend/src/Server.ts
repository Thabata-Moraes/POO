// importa a classe fastify da dependência fastify
import Fastify from "fastify";
import {PrismaClient} from '@prisma/client'

// instanciar o obj da classe fastify 
const app = Fastify()

// Instanciar obj da classe PrismaClient
const prisma = new PrismaClient()

// definir uma rota chamada hello- verbo é get, uma consulta
app.get('/hello', () => {
    return 'Hello World ihuul'
})

app.get('/products',async () => {
    const habbits = await prisma.product.findMany()
    return habbits
})

app.get('/productByName',async () => {
    const habbits = await prisma.product.findMany({
        where: {
            name: {
                startsWith: 'X'
            }
        }
    })
    return habbits
})

// vamos subir o servidor, vamos executá-lo, ele ficará ouvindo e aguardando as requisições 
app.listen({
    port: 3333
}) 

.then(() => {
    console.log('HTTP server running and listening requests')
})