const router = require('koa-router')()
router.prefix('/admin')
let Login = require('../admin/controller/login')
let Index = require('../admin/controller/index')
let Chart = require('../admin/controller/chart')
let TableFontList = require('../admin/controller/table-font-list')
let TableImagesList = require('../admin/controller/table-images-list')
let FormNews = require('../admin/controller/form-news')
let FormNewsList = require('../admin/controller/form-news-list')
let FormAmazeui = require('../admin/controller/form-amazeui')
let FormLine = require('../admin/controller/form-line')

router.get('/login', Login)
router.get('/index', Index)
router.get('/chart', Chart)
router.get('/table-font-list', TableFontList)
router.get('/form-news', FormNews)
router.get('/table-images-list', TableImagesList)
router.get('/form-news-list', FormNewsList)
router.get('/form-amazeui', FormAmazeui)
router.get('/form-line', FormLine)


module.exports = router
