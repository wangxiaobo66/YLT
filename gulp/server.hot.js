/**
 * @file
 * @author jinguangguo
 * @date 2016/5/25
 */

import gulp from 'gulp';
import ip from 'ip';
import webpack from 'webpack';
import WebpackDevServer from "webpack-dev-server";
import webpackConfigDev from './webpack/webpack.config.dev';
import gulpLess from 'gulp-less';
import gulpSourcemaps from 'gulp-sourcemaps';
import gulpAutoprefixer from 'gulp-autoprefixer';
import through2 from 'through2';
import Hapi from 'hapi';
import Inert from 'inert';

import getFileInfo from './util/file';
import mocks from '../mock/main';

const PORT_HAPI = 9998;
const PORT_WEBPACK = 9999;


gulp.task('server:hot', function() {

    // hapi
    startHapiServer();

    // webpack
    startWebpackServer();

    // webpack

    function startWebpackServer() {
        if (!webpackConfigDev.plugins) {
            webpackConfigDev.plugins = [];
        }
        webpackConfigDev.plugins.push(new webpack.HotModuleReplacementPlugin());

        //let server = new WebpackDevServer();
        const clientString1 = 'webpack-dev-server/client?http://0.0.0.0:' + PORT_WEBPACK;
        const clientString2 = 'webpack/hot/dev-server';
        for (let key in webpackConfigDev.entry) {
            //console.log('key: key', 'The value is:' + webpackConfigDev.entry[key]);
            webpackConfigDev.entry[key].unshift(clientString1, clientString2);
            //console.log(webpackConfigDev.entry[key]);
        }
        let compiler = webpack(webpackConfigDev);
        //启动服务
        let app = new WebpackDevServer(compiler, {
            publicPath: webpackConfigDev.output.publicPath,
            hot: false,
            quiet: true,
            historyApiFallback: true,
            proxy: [
                {
                    path: '*.json',
                    target: 'http://localhost:' + PORT_HAPI,
                    host: 'localhost'
                },
                {
                    path: "*.less",
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
        server.register(Inert, function () {});
        // 静态资源
        server.route({
            method: 'GET',
            path: '/{params*}',
            handler: function(request, reply) {

                console.log('path=======' + request.path);

                let fileInfo = getFileInfo(request.path);

                switch (fileInfo.fileType) {

                    //case 'html':
                    //    reply.file(fileInfo.filePath);
                    //    break;

                    case 'less':
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
        // mock
        mocks.forEach(function (item) {
            server.route(item);
        });
        // start
        server.start(function () {
            console.log(`Hapi Server Started at ${server.info.protocol}:\/\/${ip.address()}:${PORT_HAPI}`);
        });
    }

});
