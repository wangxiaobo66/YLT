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

import mocks from '../mock/index';

gulp.task('server:static', function() {

    const server = new Hapi.Server();

    server.connection({
        host: '0.0.0.0',
        port: 9999
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

            console.log('fileInfo.fileType:' + fileInfo.fileType);
            console.log('fileInfo.filePath:' + fileInfo.filePath);

            switch (fileInfo.fileType) {

                case 'less':
                    gulp.src('./static/less/index.less')
                        // .pipe(gulpSourcemaps.init())
                        // .pipe(gulpLess())
                        // .pipe(gulpAutoprefixer({
                        //     browserlist: ['last 2 versions', 'Android', 'iOS']
                        // }))
                        // .pipe(gulpSourcemaps.write())
                        .pipe(
                            through2.obj(
                                function (file) {
                                    reply(file.contents.toString()).type('text/css');
                                }
                            )
                        );


                    // gulp.src('./template/**/*')
                    //     .pipe(gulp.dest('./dist/less'));

                    break;

                default:
                    reply.file(fileInfo.filePath);

            }

        }
    });

    /**
     * 注册mock接口
     */
    mocks.forEach(function (item, index) {
        server.route(item);
    });

});