module.exports = async (ctx, next)=> {
    await ctx.render('admin/view/index', {
        title:"pp"
    })
}
