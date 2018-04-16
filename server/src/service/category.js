


module.exports = {
    // 新增
    async addCategory(util){
        let result = {
            data:1
        }
        let sql = 'select * from o2o_category'
        let value = ['tom5']
        console.log(2)
        await util.query(sql).then((res)=>{
            console.log(res)
            result.data = res[0]
        })
        console.log(3)
        return result
        
        
    },
}