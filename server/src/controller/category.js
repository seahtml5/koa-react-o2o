module.exports = {
    // 添加分类
    addCategory(ctx, next, sev) {
        let data = ctx.request.body
        let result = sev.category.addCategory(data)
        ctx.body = sev.util.success(data)
    },

}