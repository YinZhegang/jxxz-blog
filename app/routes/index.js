const router = require('koa-router')()
const index  = require('../index/controller/index')
const article  = require('../index/controller/article')

router.get('/', async (ctx, next) => {
  await ctx.render('index/view/lw-index', index)
})
router.get('/article', async (ctx, next) => {
  await ctx.render('index/view/lw-article', article)
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
