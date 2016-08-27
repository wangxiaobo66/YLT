/**
 * Created by wangxiaobo on 16/8/25.
 */
/** 入口文件 **/
var koa = require('koa');
var app = new koa();
var router = require('koa-router')();
var path = require('path');
var staticCache = require('koa-static-cache');//静态文件
var routerController = require('./controller/router-controller');
var koaBody = require('koa-body')();

//页面
router.get('/index', routerController.index);
router.get('/detail', routerController.detail);

//接口


//静态
// router.get('/*.js', function() {
//     // TODO 解析ES6
//
// });

app
    .use(router.routes())
    .use(router.allowedMethods());

app.use(staticCache(path.join(__dirname, 'static/'), {
    maxAge: 365 * 24 * 60 * 60,
    gzip: true,
    dynamic: true,
    // buffer: true,
    // prefix: 'static',
    usePrecompiledGzip: true
}));

app.listen(10007);