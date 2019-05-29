const router = require('koa-router')()
const index  = require('../index/controller/index')

let Index = require('../index/controller/index')
let Article  = require('../index/controller/article')
router.get('/', Index)
router.get('/index', Index)
router.get('/article', Article)

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
