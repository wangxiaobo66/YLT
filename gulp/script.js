/**
 * @file
 * @author jinguangguo
 * @date 2016/6/13
 */

import gulp from 'gulp';
import gulpWebpack from 'gulp-webpack';

import webpackConfigDev from './webpack/webpack.config.dev';

gulp.task('script', function () {
    return gulp
        .src('./app/js/index.js')
        .pipe(gulpWebpack(webpackConfigDev))
        //.pipe(uglify())
        .pipe(gulp.dest('./output/src'));
});
