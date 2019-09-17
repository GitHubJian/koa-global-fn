const koa = require('koa')

const app = new koa()
const port = 8422

app.context.renderToString = function() {
  console.log(`abc`)
}

app.use(async (ctx, next) => {
  ctx.renderToString()

  ctx.body = 'Hello, world'
})

app.listen(port, function() {
  console.log(`✨ Server on: http://localhost:${port}`)
})
