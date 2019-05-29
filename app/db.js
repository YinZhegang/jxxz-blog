var Sequelize = require('sequelize')

module.exports = new Sequelize('yzgblog','yzgblog','yzg_blog',{
    host:'106.12.123.49',
    dialect:'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
})
