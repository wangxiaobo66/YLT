/**
 * @file
 * @auth jinguangguo@new4g.cn
 * @date 2016/8/14
 */

import gulp from 'gulp';
import gulpWebpack from 'gulp-webpack';

import webpackConfigBase from '../webpack/webpack.config.base';

gulp.task('js', function () {
    return gulp
        .src('./static/page/index/index.js')
        .pipe(gulpWebpack(webpackConfigBase))
        //.pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('js:dist', function () {
    return gulp
        .src('./static/page/index/index.js')
        .pipe(gulpWebpack(webpackConfigBase))
        //.pipe(uglify())
        .pipe(gulp.dest('./output'));
});
