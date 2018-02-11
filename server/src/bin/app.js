const Wkoa = require('./core')
const cors = require('koa2-cors');

const app = new Wkoa()

// 跨域
const Access = {
    origin: function(ctx){
        return 'http://localhost:8089'
    }
};
app.use(cors(Access));

// use koa-router
app.setRouters()
app.on('error', err => {
    console.log('server error', err)
});



app.listen(3001,()=>{
    console.log('server running at localhost:3001')
})













