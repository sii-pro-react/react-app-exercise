const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(
  jsonServer.rewriter({
    '/api/*': '/$1'
  })
)

// simulate waiting
server.use((req, res, next) => {
  setTimeout(() => next(), 2000);
});

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.use(router)

server.listen(3005, () => {
  console.log('JSON Server is running')
})
