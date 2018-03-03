module.exports = (app)=>{
    const ctr = app.controller
    return {
        'get /': ctr.foo.home,
        'get /user': ctr.foo.user,
        'post /add_category': ctr.category.addCategory,
    }
}