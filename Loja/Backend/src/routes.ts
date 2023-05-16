import {z} from 'zod';
import dayjs from "dayjs";
import { prisma } from './lib/prisma';
import { FastifyInstance } from 'fastify';

export async function AppRoutes(app: FastifyInstance){
    // definir uma rota chamada hello- verbo é get, uma consulta
    app.get('/hello', () => {
        return 'Hello World ihuul'
    })
    
    //rota que consulta todos os produtos
    app.get('/products',async () => {
        const products = await prisma.product.findMany()
        return products
    })
    
    //rota que consulta produtos específicos
    app.get('/productByName/:name',async (request) => {
        const nameParam = z.object({
            name: z.string()
        })
        const {name} = nameParam.parse(request.params)
        const products = await prisma.product.findMany({
            //recupera o name informado pelo front
            where: {
                name: {
                    startsWith: name
                }
            }
        })
        return products
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
        let newProduct = await prisma.product.create({
            data : {
                name,
                description,
                quantity,
                created_at: today,
            }
        })   
        return newProduct
    }) 
    
    //rota para remover um produto, usando o verbo delete
    app.delete('/product/:id', async (request) => {
        //recupera o id para remoção
        const idParam = z.object({
            id: z.string().uuid()
        })
        const {id} = idParam.parse(request.params)
        // remove o produto
        const deleted = await prisma.product.delete({
            where: {
                id: id
            }
        })
        return deleted
        
    })
    
    // atualiza a quantidade -> compra
    app.patch('/product/purchase',async (request) => {
        const purchaseBody = z.object({
            id: z.string().uuid(),
            x: z.number()
        })
        const {id, x} = purchaseBody.parse(request.body)
    
        const productUpdated = await prisma.product.update({
            where: {
                id: id,
            },
            data: {
                quantity: {
                    increment: x
                }
            }
        })
        return productUpdated
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
            let productUpdated = await prisma.product.findUnique({
                where: {
                    id: id
                }
            })
            return {
                status:'Venda realizada com sucesso',
                product: productUpdated, 
                response: response
            }
        } else {
            return 'Venda não realizada'
        }
    })

    app.put('/product',async (request) => {
        const putBody = z.object({
            id: z.string().uuid(),
            name: z.string(),
            description: z.string(),
            quantity: z.number()
        })
        // recupera os dados do front
        const {id, name, description, quantity} = putBody.parse(request.body) 

        const productUpdated = await prisma.product.update({
            where: {
                id: id
            },
            data: {
                name,
                description,
                quantity 
            }
        })
        return productUpdated
    })
}

