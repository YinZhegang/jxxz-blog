const User = require('../model/users')

module.exports = async (ctx, next)=> {
    var users;
    await User.findAll().then(user => {
        console.log(user[0].dataValues.nickname);
        users = user[0].dataValues.nickname;
    })
    await ctx.render('index/view/lw-index', {
        title:users
    })
}
