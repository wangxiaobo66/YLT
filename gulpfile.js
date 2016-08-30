/**
 * Created by wangxiaobo on 16/8/29.
 */
const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const productConfig = require('./product-webpack');
const webpackStream = require('webpack-stream');

gulp.task('es5Js', function () {
    'use strict';
    let rootPath = './static/js/third';
    return gulp.src([rootPath + '/es5-shim.min.js', rootPath + '/es5-sham.min.js'])
        .pipe(concat('compatible.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('yltS', function () {
    return gulp.src(['js/app/**', 'js/components/**', 'js/lib/**', 'js/page/**', 'js/redux/**', 'js/swf/**', 'js/third/**', 'css/*.scss'])//类似于这种写法
        .pipe(webpackStream(productConfig))
        .pipe(gulp.dest('dist'))
});

gulp.task('YLT', ['es5Js','yltS']);