// 验证addCategory参数
function validateAddCategory(req) {
    let res = {
        pass: true,
        msg: ''
    }
    if (req.parent_id === undefined || req.parent_id == '') {
        res.pass = false
        res.msg = '缺少parent_id参数'
    }
    if (!req.name) {
        res.pass = false
        res.msg = '缺少name参数'
    }
    return res
}


module.exports = {
    // 添加分类
    async addCategory(ctx,sev,util) {
        let req = ctx.request.body
        console.log(1)

        // 可行
        // let sql = 'SELECT * from o2o_category'
        //  await util.query(sql).then((result) => {
        //     console.log(3)
        //     console.log(res)
        //     console.log(4)
        //     res = result[0]
        //     console.log(res)
        // })
        // console.log(555)
        // console.log(res)
        // ctx.body = res

        let res =  await sev.category.addCategory(util)
        console.log(4)
        ctx.body = res
    },

}