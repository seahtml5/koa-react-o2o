const fs = require('fs')
const Koa = require('koa')
const Router = require('koa-router')
const Loader = require('./loader')
const Util = require('../util')

class Wkoa extends Koa {
    constructor(){
        super()

        this.router = new Router()
        this.loader = new Loader()
        this.controller = {}
        this.service = {}
        this.util = Util
        this.setController()
        this.setService()
    }

    // use koa-router and load service
    setRouters(){
        const _setRouters = (app)=>{
            const routers = require('../routers')(app)
            Object.keys(routers).forEach(key=>{
                const METHOD = key.split(' ')[0]
                const URL = key.split(' ')[1]
                const CB = routers[key]
                // 此处需使用async await语法 否则获取不到数据库查询
                app.router[METHOD](URL, async(ctx)=>{
                   await CB(ctx,this.service,this.util)
                })
            })
            return app.router.routes()
        }
        this.use(_setRouters(this))
    }

    setService(){
        const services = this.loader.loadService()
        services.forEach(sev=>{
            this.service[sev.name] = sev.module
        })
    }

    setController(){
        const controllers = this.loader.loadController()
        controllers.forEach((clr) => {
            this.controller[clr.name] = clr.module
        })
    }


}
module.exports = Wkoa
