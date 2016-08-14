/**
 * @file
 * @author jinguangguo
 * @date 2016/5/25
 */

import gulp from 'gulp';
import Hapi from 'hapi';
import Inert from 'inert';
import WebpackPlugin from 'hapi-webpack-plugin';
import gulpLess from 'gulp-less';
import gulpSourcemaps from 'gulp-sourcemaps';
import gulpAutoprefixer from 'gulp-autoprefixer';
import through2 from 'through2';
import ip from 'ip';
import getFileInfo from './util/file';

gulp.task('server:hapi', function() {

    const server = new Hapi.Server();

    server.connection({
        host: '0.0.0.0',
        port: 9990
    });

    server.register(Inert, function () {});

    /**
     * Register plugin and start server
     */
    server.register({
        register: WebpackPlugin,
        options: './gulp/webpack/webpack.config.static.js'
    }, function (error) {
        if (error) {
            return console.error(error);
        }
        server.start(function () {
            console.log(`Server started at ${server.info.protocol}:\/\/${ip.address()}:${server.info.port}`);
        });
    });

    // 静态资源
    server.route({
        method: 'GET',
        path: '/{params*}',
        handler: function(request, reply) {

            console.log('path=======' + request.path);

            let fileInfo = getFileInfo(request.path);

            switch (fileInfo.fileType) {

                case 'less':
                    gulp.src(fileInfo.filePath)
                        .pipe(gulpSourcemaps.init())
                        .pipe(gulpLess())
                        .pipe(gulpAutoprefixer({
                            browsers: ["last 2 versions", "Android", "iOS"]
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

});