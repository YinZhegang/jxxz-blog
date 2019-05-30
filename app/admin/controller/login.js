module.exports = async (ctx, next)=> {
    await ctx.render('admin/view/login', {
        title:"pp"
    })
}
