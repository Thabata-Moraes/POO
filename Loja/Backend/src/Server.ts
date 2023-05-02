// importa a classe fastify da dependência fastify
import Fastify from "fastify";
import { AppRoutes } from "./routes";

// instanciar o obj da classe fastify 
const app = Fastify()

// Registro todas as rotas no servidor HTTP
app.register(AppRoutes)

// vamos subir o servidor, vamos executá-lo, ele ficará ouvindo e aguardando as requisições 
app.listen({
    port: 3333
}) 

.then(() => {
    console.log('HTTP server running and listening requests')
})