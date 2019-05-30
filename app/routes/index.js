const router = require('koa-router')()

let Index = require('../index/controller/index')
let Article  = require('../index/controller/article')
let Img = require('../index/controller/img')
let ArticleFullwidth = require('../index/controller/article-fullwidth')
let CategorySidebar = require('../index/controller/category-sidebar')
let IndexCenter = require('../index/controller/index-center')
let Log = require('../index/controller/log')
let Re = require('../index/controller/re')
let Timeline = require('../index/controller/timeline')
let IndexNosidebar = require('../index/controller/index-nosidebar')
let IndexNoslider = require('../index/controller/index-noslider')

router.get('/', Index)
router.get('/index', Index)
router.get('/article', Article)
router.get('/img', Img)
router.get('/article-fullwidth', ArticleFullwidth)
router.get('/category-sidebar', CategorySidebar)
router.get('/index-center', IndexCenter)
router.get('/log', Log)
router.get('/re', Re)
router.get('/timeline', Timeline)
router.get('/index-nosidebar', IndexNosidebar)
router.get('/index-noslider', IndexNoslider)



router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
