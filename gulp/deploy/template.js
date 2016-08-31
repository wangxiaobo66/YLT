/**
 * @file
 * @auth jinguangguo
 * @date 2016/8/31
 */

import gulp from 'gulp';

gulp.task('copy:template', function () {
    // 将template的内容复制到dist文件夹下
    return gulp.src('**/template/**/**')
        .pipe(gulp.dest('./dist'));
});
