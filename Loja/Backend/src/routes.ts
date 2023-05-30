import {z} from 'zod';
import dayjs from "dayjs";
import { prisma } from './lib/prisma';
import { FastifyInstance } from 'fastify';

export async function AppRoutes(app: FastifyInstance){
    // criar usuário
    app.post('/user',async (request) => {
     const userPost = z.object({
        username: z.string(),
        password: z.string(),
        email: z.string().email()
     })
     const {username, password, email} = userPost.parse(request.body)
     const newUser = await prisma.user.create({
        data : {
            username, 
            password,
            email
        }
     })    
     return newUser
    })

    //verifica usuário e senha
    app.post('/user/verifica',async (request) => {
        const verificaBody = z.object({
            username: z.string(),
            password: z.string()
        })
        const {username, password} = verificaBody.parse(request.body)
        const result = await prisma.user.findFirst({
           where: {
                username,
                password
           }
        })
        return result    
    })

    //rota que consulta todos os usuários
     app.get('/users',async () => {
        const users = await prisma.user.findMany()
        return users
    })

    //rota que consulta todos os produtos
    app.get('/products',async () => {
        const products = await prisma.product.findMany()
        return products
    })

    //rota que consulta produtos por usuário 
    app.get('/products/:userId',async (request) => {
        const userIdParams = z.object({
            userId: z.string().uuid()
        })
        const {userId} = userIdParams.parse(request.params)
        const products = await prisma.product.findMany({
            where: {
                userId : userId
            }
        })
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

    app.get('/productById/:id',async (request) => {
        const idParam = z.object({
            id: z.string().uuid()
        })
        const {id} = idParam.parse(request.params)
        const product = await prisma.product.findUnique({
            //recupera o name informado pelo front
            where: {
                id
            }
        })
        return product
    })
    
    // define uma rota que cria um produto no banco de dados, usadndo o verbo post
    app.post('/product', async (request) => {
        // recupera os dados do body (corpo da requisição)
        const createProductBody = z.object({
            name: z.string(),
            description: z.string(),
            quantity: z.number(),
            userId: z.string().uuid()
        })
        const {name, description, quantity, userId} = createProductBody.parse(request.body)
    
        //recupera a data atual:
        const today = dayjs().startOf('day').toDate() //startOf só cria o dia, sem hora, min e segundo.
    
        // Insere o produto no banco:
        let newProduct = await prisma.product.create({
            data : {
                name,
                description,
                quantity,
                created_at: today,
                userId
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
            return {
                status: 'Venda não realizada'
            }
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

