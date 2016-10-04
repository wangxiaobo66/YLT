/**
 * @file
 * @author jinguangguo
 * @date 2016/5/25
 */

import gulp from 'gulp';
import ip from 'ip';
import webpack from 'webpack';
import WebpackDevServer from "webpack-dev-server";
import webpackConfigBase from '../webpack.config.babel';
import gulpSourcemaps from 'gulp-sourcemaps';
import gulpAutoprefixer from 'gulp-autoprefixer';
import through2 from 'through2';
import Hapi from 'hapi';
import Inert from 'inert';

import getFileInfo from './util/file';
import mocks from '../mock/index';

const PORT_HAPI = 9998;
const PORT_WEBPACK = 9997;

gulp.task('server:hot', function () {

    // hapi
    startHapiServer();

    // webpack
    startWebpackServer();

    // webpack

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
                    path: '*.json',
                    target: 'http://localhost:' + PORT_HAPI,
                    host: 'localhost'
                },
                {
                    path: "*.scss",
                    target: "http://localhost:" + PORT_HAPI,
                    host: "localhost"
                }
            ],
            stats: {
                colors: true
            }
        });
        app.listen(PORT_WEBPACK, '0.0.0.0');
        console.log(`Webpack Server Started at http:\/\/${ip.address()}:${PORT_WEBPACK}`);
    }

    function startHapiServer() {
        const server = new Hapi.Server();
        server.connection({
            host: '0.0.0.0',
            port: PORT_HAPI
        });
        server.register(Inert, function () {
        });

        // mock
        mocks.forEach(function (item) {
            server.route(item);
        });

        // 静态资源
        server.route({
            method: 'GET',
            path: '/{params*}',
            handler: function (request, reply) {

                console.log('path=======' + request.path);

                let fileInfo = getFileInfo(request.path);

                switch (fileInfo.fileType) {

                    //case 'html':
                    //    reply.file(fileInfo.filePath);
                    //    break;

                    case 'scss':
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
                        break;

                    default:
                        reply.file(fileInfo.filePath);

                }

            }
        });

        // start
        server.start(function () {
            console.log(`Hapi Server Started at ${server.info.protocol}:\/\/${ip.address()}:${PORT_HAPI}`);
        });
    }

});
