module.exports = {
    // 添加分类
    addCategory(ctx, next, sev,util) {
        let data = ctx.request.body
        let result = sev.category.addCategory(data)
        ctx.body = util.success(result)
    },

}