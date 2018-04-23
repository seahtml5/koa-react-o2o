


module.exports = {
    /**
     * 添加分类分类
     * @param {number} parent_id 父级分类id; 0:一级分类
     * @param {string} name   分类名
     * @param {number} page  
     */
    async addCategory(req,util){
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

        let sql = 'SELECT id, name, listorder FROM o2o_category WHERE parent_id = 1'

        await util.query(sql).then(res=>{
            console.log(res)
            result = util.success(res)
        }).catch(err=>{
            console.log(err)
            result = util.error('error')
        })
        return result
    }
}