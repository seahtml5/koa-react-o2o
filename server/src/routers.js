module.exports = (app)=>{
    const ctr = app.controller
    return {
        'get /': ctr.foo.home,
        'get /user': ctr.foo.user,
        'post /category_add': ctr.category.addCategory,
        'get /category_lev_one': ctr.category.categoryLevOne,
        

    }
}