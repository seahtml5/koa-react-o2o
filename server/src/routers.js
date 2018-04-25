module.exports = (app)=>{
    const ctr = app.controller
    return {
        'get /': ctr.foo.home,
        'get /user': ctr.foo.user,
        // 新增分类
        'post /category_add': ctr.category.addCategory,
        // 查询一级分类
        'get /category_lev_one': ctr.category.categoryLevOne,
        // 查询二级分类
        'get /category_lev_two': ctr.category.categoryLevTwo

    }
}