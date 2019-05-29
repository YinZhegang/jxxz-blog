module.exports = async (ctx, next)=> {
    await ctx.render('index/view/lw-article', {
        title:333
    })
}
