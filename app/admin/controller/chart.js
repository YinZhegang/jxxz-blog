module.exports = async (ctx, next)=> {
    await ctx.render('admin/view/chart', {
        title:"pp"
    })
}
