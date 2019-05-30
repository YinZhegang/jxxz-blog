module.exports = async (ctx, next)=> {
    await ctx.render('index/view/lw-index-nosidebar', {
        title:"pp"
    })
}
