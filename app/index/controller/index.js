let Sequelize = require('sequelize')
let sequelize = require('../../db')
// let User = sequelize.define('users',{
//     username:{
//         type:Sequelize.STRING,
//         filed:'username'
//     },
//     email: {
//         type: Sequelize.STRING,
//         filed:'email'
//     }
// })
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
module.exports ={
    title:"000"
}
