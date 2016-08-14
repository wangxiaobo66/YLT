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

### changelog

* 8月5日 - 创建项目
* 8月8日 - 项目基础架构
* 8月14日 - 添加基本组件
