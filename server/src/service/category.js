
module.exports = {
    // 添加分类
    async addCategory(util,req){
        let result
        let sql = 'insert o2o_category(parent_id,name) values (?,?);'
        let value = [req.parent_id,req.name]
        await util.query(sql,value).then((res)=>{
            result = util.success('success')
        }).catch(err=>{
            console.log(err)
            result = util.error('error')
        })
        return result
    },

    // 查询一级分类
    async categoryLevOne(util){
        let result

        let sql = 'SELECT id, name, listorder FROM o2o_category WHERE parent_id = 1'    // TODO parent_id = 0

        await util.query(sql).then(res=>{
            console.log(res)
            result = util.success(res)
        }).catch(err=>{
            console.log(err)
            result = util.error('error')
        })
        return result
    },

    // 查询二级分类
    async categoryLevTwo(util,req){
        let result
        let page = req.page
        let parentId = req.parent_id
        let pageSize = 10
        let limitStart = (page-1)*pageSize
        let limitEnd = page*pageSize
        // 获取分类
        let paramsCategory =[parentId,limitStart,limitEnd]
        let sqlCategory = 'SELECT id,name,listorder From o2o_category WHERE parent_id = ? LIMIT ?,?' 

        // 获取个数
        let sqlCount = 'SELECT count(*) AS total FROM o2o_category WHERE parent_id = ?'
        let paramsCount = [parentId]

        //async/awit语法可以直接进行异步查询操作  避免使用async库
        // 获取二级分类
        await util.query(sqlCategory,paramsCategory).then(res=>{
            result = util.success(res)
        }).catch(err=>{
            result =  util.error(err)
        })
        // 获取当前分类总个数
        await util.query(sqlCount,paramsCount).then(res => {
            result.total = res[0].total
        })
        return result
    }
}