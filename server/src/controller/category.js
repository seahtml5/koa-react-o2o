const _ = require('lodash');

// 验证addCategory参数
function validateAddCategory(req) {
    let res = {
        pass: true,
        msg: ''
    }

    if(_.isEmpty(req.parent_id)){
        res.pass = false
        res.msg = '缺少parent_id'
    }

    if( _.isEmpty(req.name)){
        res.pass = false
        res.msg = '缺少name'
    }
    return res
}


module.exports = {
    /**
     * 添加分类
     * @param {number} parent_id 父级分类id; 0:一级分类
     * @param {string} name   分类名
     * @param {number} page  
     */
    async addCategory(ctx,sev,util) {
        let req = ctx.request.body

        let valid = validateAddCategory(req)
        if(!valid.pass){
            ctx.body = util.error(valid.msg)
            return
        }
        let res =  await sev.category.addCategory(util,req)
        ctx.body = res
    },
    
    /**
     * 查询一级分类
     */
    async categoryLevOne(ctx,sev,util){
        let res = await sev.category.categoryLevOne(util)
        ctx.body = res
    },


    /**
     * 查询二级分类
     * @param {num} parent_id 父级分类id
     * @param {num} page page
     */
    async categoryLevTwo(ctx,sev,util){
        let query = ctx.request.query
        
        let req = {
            parent_id: _.toNumber(query.parent_id),
            page: _.toNumber(query.page)
        }
        let res = await sev.category.categoryLevTwo(util,req)
        ctx.body = res
    }
}