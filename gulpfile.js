/**
 * Created by wangxiaobo on 16/8/29.
 */
const path = require('path');
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('es5Js', function () {
    'use strict';
    let rootPath = './static/js/third';
    return gulp.src([rootPath + '/es5-shim.min.js', rootPath + '/es5-sham.min.js'])
        .pipe(concat('compatible.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('YLT', ['es5Js']);


var b = 10;
function a(){
    b+=10;
    return b;
}
alert(a(),b); 20,10