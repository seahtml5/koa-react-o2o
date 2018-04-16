const Wkoa = require('./core')
var bodyParser = require('koa-bodyparser');

const app = new Wkoa()
app.use(bodyParser())

// use koa-router
app.setRouters()

app.listen(3001,()=>{
    console.log('server running at localhost:3001')
})
