const Wkoa = require('./core')
var bodyParser = require('koa-bodyparser');

const app = new Wkoa()
app.use(bodyParser())

// app.use(cors(Access));

// use koa-router
app.setRouters()
// app.on('error', err => {
//     console.log('server error', err)
// });



app.listen(3001,()=>{
    console.log('server running at localhost:3001')
})













