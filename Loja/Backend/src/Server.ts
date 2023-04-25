// importa a classe fastify da dependência fastify
import Fastify from "fastify";
import {PrismaClient} from '@prisma/client'
import {z} from 'zod';
import dayjs from "dayjs";
import { allowedNodeEnvironmentFlags } from "process";

// instanciar o obj da classe fastify 
const app = Fastify()

// Instanciar obj da classe PrismaClient
const prisma = new PrismaClient()

// definir uma rota chamada hello- verbo é get, uma consulta
app.get('/hello', () => {
    return 'Hello World ihuul'
})

//rota que consulta todos os produtos
app.get('/products',async () => {
    const habbits = await prisma.product.findMany()
    return habbits
})

//rota que consulta produtos específicos
app.get('/productByName/:name',async (request) => {
    const nameParam = z.object({
        name: z.string()
    })
    const {name} = nameParam.parse(request.params)
    const habbits = await prisma.product.findMany({
        //recupera o name informado pelo front
        where: {
            name: {
                startsWith: name
            }
        }
    })
    return habbits
})

// define uma rota que cria um produto no banco de dados, usadndo o verbo post
app.post('/product', async (request) => {
    // recupera os dados do body (corpo da requisição)
    const createProductBody = z.object({
        name: z.string(),
        description: z.string(),
        quantity: z.number()
    })
    const {name, description, quantity} = createProductBody.parse(request.body)

    //recupera a data atual:
    const today = dayjs().startOf('day').toDate() //startOf só cria o dia, sem hora, min e segundo.

    // Insere o produto no banco:
    await prisma.product.create({
        data : {
            name,
            description,
            quantity,
            created_at: today,
        }
    })   
}) 

//rota para remover um produto, usando o verbo delete
app.delete('/product/:id', async (request) => {
    //recupera o id para remoção
    const idParam = z.object({
        id: z.string().uuid()
    })
    const {id} = idParam.parse(request.params)
    // remove o produto
    await prisma.product.delete({
        where: {
            id: id
        }
    })
    
})

// atualiza a quantidade -> compra
app.patch('/product/purchase',async (request) => {
    const purchaseBody = z.object({
        id: z.string().uuid(),
        x: z.number()
    })
    const {id, x} = purchaseBody.parse(request.body)

    await prisma.product.update({
        where: {
            id: id,
        },
        data: {
            quantity: {
                increment: x
            }
        }
    })
})

// atualiza a quantidade -> venda
app.patch('/product/sell',async (request) => {
    const purchaseBody = z.object({
        id: z.string().uuid(),
        x: z.number()
    })
    const {id, x} = purchaseBody.parse(request.body)
    const response = await prisma.product.updateMany({
        where: {
            id: id,
            quantity: {
                gt: x
            }
        },
        data: {
            quantity: {
                decrement: x
            }
        }
    })
    if(response.count > 0){
        return 'Venda realizada com sucesso'
    } else {
        return 'Venda não realizada'
    }
})

// vamos subir o servidor, vamos executá-lo, ele ficará ouvindo e aguardando as requisições 
app.listen({
    port: 3333
}) 

.then(() => {
    console.log('HTTP server running and listening requests')
})