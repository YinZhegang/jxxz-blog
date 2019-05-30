const router = require('koa-router')()
router.prefix('/admin')
let Login = require('../admin/controller/login')
let Index = require('../admin/controller/index')

router.get('/login', Login)
router.get('/index', Index)






module.exports = router
