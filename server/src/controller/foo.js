module.exports = {
    home(ctx) {
        ctx.type = 'html'
        ctx.body = '<h1>hello wkoa1</h1>'
    },
    
    user(ctx,next,sev,util) {
        let date =   util.formatDate()
        let name =   sev.foo.getName()
        let greet = 'greeting from user ' + date + ' ' + name
        ctx.body = greet
    }
}