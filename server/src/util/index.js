const mysql = require('mysql');
const config = require('../dbconfig')

const pool = mysql.createPool(config.mysql);

module.exports = {
    // mysql查询
    query(sql,val){
        return new Promise((resolve,reject)=>{
            pool.getConnection( (err, connection) => {
                if(err){
                    reject(err)
                }else {
                    connection.query(sql,val,(error,result)=>{
                        if(error){
                            reject(error)
                        }else {
                            resolve(result)
                        }
                        connection.release()
                    })
                }
            });
        })
    },

    // restful 成功
    success(data) {
        let res = {}
        res.code = 200
        res.msg = 'success'
        res.data = data
        return res
    },

    // restful 错误
    error(data) {
        let res = {}
        res.code = 400
        res.msg = 'error'
        res.data = data
        return res
    },

    // 登陆过期
    

    // 格式化日期 yy-mm-dd
    formatDate(val) {
        const dates = val || Date.now()
        const date = new Date(dates)
        const y = date.getFullYear()
        const m = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
        const d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()

        return `${y}-${m}-${d}`
    },

}    
