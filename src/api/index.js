import Koa from 'koa'
import Router from 'koa-router'
import fetch from 'node-fetch'

const app = new Koa()
const router = new Router();
const BEHANCE_APIKEY = `vHxD4ly5SN0XJYgby7xLEwwPw9VQ7Oxk` // Should be in something secure like, Hashicorp's Vault

fetch(`http://behance.net/v2/users/matiascorea?api_key=${BEHANCE_APIKEY}`).then((r) => {
  console.dir(r, {colors: true, depth: 2})
})

router.get('/api/foo', (ctx) => {
  ctx.body = {
    foo: 'Foo'
  }
})

app
.use(router.routes())
.use(router.allowedMethods())

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
