import  { fastify, FastifyReply, FastifyRequest } from 'fastify';

const server = fastify();

server.get('/ping', async (req: FastifyRequest, rep: FastifyReply) => {
    return `pong at ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
});

server.listen(8082, (err, addr) => {
    if(err) {
        console.error(err);
        process.exit(1);
    } 

    console.log(`server started at ${addr}`);
})