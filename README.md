YLT-伊利托项目
===================

### 在gulp中使用ES6

[详细介绍](https://github.com/wangchi/using-es6-with-gulp)

### tag目录
> - gulp支持ES6: gulp_es6
> - less支持: wepack添加less支持
> - svg文件转换iconfont的支持: iconfont

### 使用less
主要具备两个功能点
> - 源码的映射 - 使用sourcemaps
> - 自动补全css3前缀 - 使用autoprefixer

node端使用
```javascript
gulp.src(fileInfo.filePath)
    .pipe(gulpSourcemaps.init())
    .pipe(gulpLess())
    .pipe(gulpAutoprefixer({
        browsers: ['last 2 versions', 'Firefox >= 20', 'last 3 Safari versions', 'last 2 Explorer versions']
    }))
    .pipe(gulpSourcemaps.write())
    .pipe(
        through2.obj(
            function (file) {
                reply(file.contents.toString()).type('text/css')
            }
        )
    );
```

webpack的loader配置
```javascript
{
    test: /(\.css|\.less)$/,
    loader: 'style?sourceMap!css?sourceMap!less?sourceMap!autoprefixer?{browsers:["last 2 versions", "Firefox >= 20", "last 3 Safari versions", "last 2 Explorer versions"]}'
    //loader: ExtractTextPlugin.extract(
    //    // activate source maps via loader query
    //    'css?sourceMap!less?sourceMap'
    //)
}
```

现在两种的使用方式, 直接link引入less文件, 同样可以在js中import对应的less文件()使用webpack, 主要是方便js引用相关的模块css, 使得组件更加内聚).

多使用在head标签提那家link引入less文件的方式, 若使用js中importless文件的方式, 会出现闪屏的现象. 除非内容和样式文件同时被渲染.

### 添加使用svg
在/app/svg目录下添加对应的svg文件, 然后执行gulp iconfont生成新的字体文件和对应font样式文件


### 添加webpack-dev-server的热加载模式
对于webpack管理的js, 当发生更改之后, 浏览器自动reload对应的更改, 且保持对应的状态

```shell
gulp server:hot
````

对于热加载模式, 无法使用proxy代理, 不太方便. 故同时支持非热加载的模式, 用于代理调试.

```shell
gulp server:static
```
##添加tempalte文件夹放置html文件

##搭建web服务器
在根目录下添加controller文件夹用于处理接口设置和路由设置.
添加ylt.js入口文件,匹配页面和接口.debug启动web服务器.

```shell
koa等一系列相关插件
```

### 所有页面

* 到货列表: http://localhost:9997/template/arrival/arrival.html
* 木材求购(3个页面, 待完善): http://localhost:9997/template/ask-buy/ask-buy.html
* 忘记密码: http://localhost:9997/template/forget/forget.html
* 首页: http://localhost:9997/template/index/index.html
* 登陆: http://localhost:9997/template/login/login.html
* 未售市场(3个页面, 待完善): http://localhost:9997/template/market/market.html
* 我的: http://localhost:9997/template/mine/mine.html
* 登出: http://localhost:9997/template/out-login/out-login.html
* 铁路运费 (暂时废弃, 依赖铁路接口): http://localhost:9997/template/railway/railway.html
* 注册: http://localhost:9997/template/register/register.html
* 搜素页(3个页面, 待完善): http://localhost:9997/template/search/search.html
* 全部店铺: http://localhost:9997/template/shop/shop.html
* 店铺主页: http://localhost:9997/template/shop/shop.html#/home
* 店铺详情: http://localhost:9997/template/shop/shop.html#/detail
* 新增店铺: http://localhost:9997/template/shop/shop.html#/add
* 新增订阅: http://localhost:9997/template/subscribe/subscribe.html
* 新增订阅之规格订阅: http://localhost:9997/template/subscribe/subscribe.html#/gg
* 新增订阅之车皮号订阅: http://localhost:9997/template/subscribe/subscribe.html#/cph (这块儿涉及到铁路, 进程待定)

### 项目服务器地址
[首页](http://123.57.83.122:8080/front.irito/html/template/index.html)

### changelog

* 8月5日 - 创建项目
* 8月8日 - 项目基础架构
* 8月14日 - 添加基本组件
* 8月17日 - 添加文件
* 8月25日 - 搭建web服务器
* 8月30日 - 添加文件:redux;webpack;gulpfile;确定不需要node中间件,我们周末再一起改一下目录结构
* 9月10日 - 目录结构已定完,必须加快项目进度