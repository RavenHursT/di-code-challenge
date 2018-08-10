import Koa from 'koa'
import Router from 'koa-router'
import usersService from '../services/users.service'

const app = new Koa()
const router = new Router();

const getApiRouteHandler = async (serviceMethod, arg, ctx) => {
  const jsonBody = await serviceMethod(arg)
  console.dir(jsonBody, {colors: true, depth:2})
  ctx.set({
    'Content-Type': `application/json`
  })
  ctx.body = jsonBody
}

router.get(
  '/api/users',
  async (ctx) => await getApiRouteHandler(usersService.find, ctx.request.query.q, ctx)
)
router.get(
  '/api/users/:username/projects',
  async (ctx) => await getApiRouteHandler(usersService.getUsersProjects, ctx.params.username, ctx)
)
router.get(
  '/api/users/:username/followers',
  async (ctx) => await getApiRouteHandler(usersService.getUsersFollowers, ctx.params.username, ctx)
)
router.get(
  '/api/users/:username/following',
  async (ctx) => await getApiRouteHandler(usersService.getUsersFollowing, ctx.params.username, ctx)
)
router.get(
  '/api/users/:username/work-experience',
  async (ctx) => await getApiRouteHandler(usersService.getUserWorkExperience, ctx.params.username, ctx)
)
router.get(
  '/api/users/:username',
  async (ctx) => await getApiRouteHandler(usersService.getByUsername, ctx.params.username, ctx)
)

app
.use(router.routes())
.use(router.allowedMethods())

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
