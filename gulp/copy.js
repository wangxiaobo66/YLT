/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/8
 */

import gulp from 'gulp';
const path = require('path');
const scp = require('gulp-scp2');
const uglify = require('gulp-uglify');
const replace = require('gulp-replace');
const deployPath = '/usr/local/apache-tomcat-8.5.5/webapps/front.irito/html/';
const host = '123.57.83.122';
const username = 'root';
const password = 'ylt779870!@#$';

gulp.task('copy:template', function () {
    return gulp
        .src('./template/*.html')
        .pipe(gulp.dest('./output/template'));
});

gulp.task('copy:dist', function () {
    return gulp.src('./dist/**/*')
        .pipe(gulp.dest('./output/dist'));
});

gulp.task('copy:distFont', ['js:temp'], function () {
    return gulp
        .src('./dist/font/*')
        .pipe(gulp.dest('./output/dist/font'));
});

gulp.task('copy:distImg', ['js:temp'], function () {
    return gulp
        .src('./dist/img/*')
        .pipe(gulp.dest('./output/dist/img'));
});

gulp.task('copy:distJs', ['js:temp'], function () {
    return gulp
        .src('./dist/js/*.js')
        .pipe(replace('../../static/', '../static/'))
        // .pipe(uglify())
        .pipe(gulp.dest('./output/dist/js'));
});

gulp.task('copy:images', function () {
    return gulp
        .src('./static/images/*')
        .pipe(gulp.dest('./output/static/images'));
});

gulp.task('copy:lib', function () {
    return gulp
        .src('./static/lib/**/*')
        .pipe(gulp.dest('./output/static/lib'));
});

gulp.task('copy:third', function () {
    return gulp
        .src('./static/js/third/*')
        .pipe(gulp.dest('./output/static/js/third'));
});

gulp.task('copy', [
    'copy:template',
    'copy:images',
    'copy:third',
    'copy:lib',
    'copy:distFont',
    'copy:distImg',
    'copy:distJs'
]);

gulp.task('appText', ['copy'], function () {
    gulp.src('./output/**/*')
        .pipe(scp({
            host: host,
            username: username,
            password: password,
            dest: deployPath
        }))
        .on('error', function (err) {
            console.log(err);
        });
});