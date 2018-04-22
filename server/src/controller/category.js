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
    // 添加分类
    async addCategory(ctx,sev,util) {
        let req = ctx.request.body

        let valid = validateAddCategory(req)
        if(!valid.pass){
            ctx.body = util.error(valid.msg)
            return
        }

        let res =  await sev.category.addCategory(req,util)
        ctx.body = res
    },

}