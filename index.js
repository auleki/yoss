const Fastify = require('fastify');
const fastify = require('fastify')()
fastify.register(require('fastify-cors'), {
  
})
// const fastify = require('fastify')({ logger: true })
// const userRoutes = require('./routes/userRoutes');

async function build () {
  const fastify = Fastify()
  await fastify.register(require('fastify-express'))

  fastify.use(require('cors')())
  return fastify
}

build()
  .then(fastify => fastify.listen(3000))
  .catch(console.log)


// fastify.get('/', async(req, res) => {
//   return { hello: 'world hi' } 
// })



// const start = async () => {
//   try {
//     await fastify.listen(3000)
//     const port = fastify.server.address().port
//     fastify.log.info(`Server listening on ${port}`)
//   } catch (err) {
//     fastify.log.error(err)
//     process.exit(1)
//   }
// } 

// start()

