/**
 * @file
 * @auth jinguangguo@new4g.cn
 * @date 2016/8/14
 */

import gulp from 'gulp';
import gulpWebpack from 'gulp-webpack';
import replace from 'gulp-replace';
import webpackConfigBase from '../../webpack.config.babel';

const path = require('path');
const scp = require('gulp-scp2');
const deployPath = '/usr/local/apache-tomcat-8.5.5/webapps/front.irito/';
const host = '123.57.83.122';
const username = 'root';
const password = 'ylt779870!@#$';

gulp.task('js', function () {
    return gulp
        .src('./static/page/index/index.js')
        .pipe(gulpWebpack(webpackConfigBase))
        //.pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('js:prod', function () {
    const PUBLIC_PATH = '/front.irito/html/dist/';
    webpackConfigBase.output.publicPath = PUBLIC_PATH;
    return gulp
        .src('./static/page/index/index.js')
        .pipe(gulpWebpack(webpackConfigBase))
        .pipe(replace('../../static/', '../static/'))
        // .pipe(uglify())
        .pipe(gulp.dest('./output/dist'));
});
