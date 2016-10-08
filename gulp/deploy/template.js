/**
 * @file
 * @auth jinguangguo
 * @date 2016/8/31
 */

import gulp from 'gulp';

gulp.task('copy:template', ['clean'], function () {
    // 将template的内容复制到dist文件夹下
    return gulp.src('**/template/*.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('template:prod', function () {
    return gulp.src('./template/*.html')
        .pipe(gulp.dest('./output/template'));
});

