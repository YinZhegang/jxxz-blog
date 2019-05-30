module.exports = async (ctx, next)=> {
    await ctx.render('index/view/lw-index-noslider', {
        title:"pp"
    })
}
