/**
 * @file
 * @auth jinguangguo
 * @date 2016/10/30
 */

import gulp from 'gulp';

gulp.task('font:dist', function () {
    return gulp.src('./static/lib/ico')
        .pipe(scss())
        .pipe(gulp.dest('./dist/css'));
});