


module.exports = {
    // 新增
    async addCategory(req,util){
        let result = {}
        let sql = 'insert o2o_category(parent_id,name) values (?,?);'
        let value = [req.parent_id,req.name]
        console.log(2)
        await util.query(sql,value).then((res)=>{
            console.log(res)
            result.data = res[0]
        }).catch(err=>{
            console.log(err)
        })
        console.log(3)
        return result
    },
}