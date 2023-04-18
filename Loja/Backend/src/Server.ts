// importa a classe fastify da dependência fastify
import Fastify from "fastify";
// instanciar o obj da classe fastify 
const app = Fastify()
// definir uma rota chamada hello- verbo é get, uma consulta
app.get('/hello', () => {
    return 'Hello World ihuul'
})

// vamos subir o servidor, vamos executá-lo, ele ficará ouvindo e aguardando as requisições 
app.listen({
    port: 3333
}) 

.then(() => {
    console.log('HTTP server running and listening requests')
})