import Koa from 'koa'
import Router from 'koa-router'
import usersService from '../services/users.service'

const app = new Koa()
const router = new Router();

router.get('/api/users', async (ctx) => {
  const result = await usersService.find(ctx.request.query.q)
  console.dir(result.body, {colors: true, depth:2})
  ctx.set({
    'Content-Type': `application/json`
  })
  ctx.body = result.body
})

app
.use(router.routes())
.use(router.allowedMethods())

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
