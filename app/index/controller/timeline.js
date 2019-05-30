module.exports = async (ctx, next)=> {
    await ctx.render('index/view/lw-timeline', {
        title:"pp"
    })
}
