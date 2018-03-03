// 验证addCategory参数
function validateAddCategory(data){
    let res = {
        pass:true,
        msg:''
    }
    if(data.parent_id == ''){
        res.pass = false
        res.msg = '缺少 parent_id 参数'
    }
    if(data.name == ''){
        res.pass = false
        res.msg = '缺少name参数'
    }
    return res
}

module.exports = {
    // 新增
    addCategory(data){
        let result = {}
        let res = validateAddCategory(data)
        if(!res.pass) return res
        //todo 数据库操作
        return result
    }


}