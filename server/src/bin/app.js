const Wkoa = require('./core')

const app = new Wkoa()

// app.use(cors(Access));

// use koa-router
app.setRouters()
app.on('error', err => {
    console.log('server error', err)
});



app.listen(3001,()=>{
    console.log('server running at localhost:3001')
})













