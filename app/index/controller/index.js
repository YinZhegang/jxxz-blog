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
User.findAll().then(user => {
    console.log(user);
})
module.exports ={
    title:"000"
}
