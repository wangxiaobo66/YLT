/**
 * @file
 * @auth jinguangguo
 * @date 2016/9/26
 */

import path from 'path';
import gulp from 'gulp';
import ip from 'ip';
import webpack from 'webpack';
import WebpackDevServer from "webpack-dev-server";
import webpackConfigBase from '../webpack.config.babel';

var express = require('express');
var jspl = require('jspl');

const PORT_EXPRESS = 5000;
const PORT_WEBPACK = 9997;

gulp.task('server:express', function () {

    startExpressServer();

    // webpack
    startWebpackServer();

    function startWebpackServer() {
        // 开启源码映射
        webpackConfigBase.devtool = 'cheap-source-map';

        if (!webpackConfigBase.plugins) {
            webpackConfigBase.plugins = [];
        }
        webpackConfigBase.plugins.push(new webpack.HotModuleReplacementPlugin());

        //let server = new WebpackDevServer();
        const clientString1 = 'webpack-dev-server/client?http://0.0.0.0:' + PORT_WEBPACK;
        const clientString2 = 'webpack/hot/dev-server';
        for (let key in webpackConfigBase.entry) {
            //console.log('key: key', 'The value is:' + webpackConfigBase.entry[key]);
            webpackConfigBase.entry[key].unshift(clientString1, clientString2);
            //console.log(webpackConfigBase.entry[key]);
        }
        let compiler = webpack(webpackConfigBase);
        // 启动服务
        // 配置文档链接: http://webpack.github.io/docs/webpack-dev-server.html
        let app = new WebpackDevServer(compiler, {
            publicPath: webpackConfigBase.output.publicPath,
            hot: true,
            quiet: true,
            historyApiFallback: true,
            proxy: [
                {
                    path: '*.html',
                    target: 'http://localhost:' + PORT_EXPRESS,
                    host: 'localhost'
                },
                // {
                //     path: "*.less",
                //     target: "http://localhost:" + PORT_EXPRESS,
                //     host: "localhost"
                // }
            ],
            stats: {
                colors: true
            }
        });
        app.listen(PORT_WEBPACK, '0.0.0.0');
        console.log(`Webpack Server Started at http:\/\/${ip.address()}:${PORT_WEBPACK}`);
    }

    function startExpressServer() {
        var app = express();
        console.log(path.join(__dirname, '../template'));
        app.set('views', path.join(__dirname, '../template'));
        app.set('view cache', false);
        jspl.bind(app);
        jspl.setExtension('.html');

        app.use(express.static(path.join(__dirname, '../static')));

        app.get('/', function(req, res) {
            res.render('index/index', {name: 'John'});
        });

        app.listen(5000);
    }

});
