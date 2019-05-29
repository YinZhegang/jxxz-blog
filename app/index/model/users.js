let Sequelize = require('sequelize')
let sequelize = require('../../db')
let User = sequelize.define('users',{
    nickname:{
        type:Sequelize.STRING
    },
    avater:{
        type:Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
})

module.exports = User;
