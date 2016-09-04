/**
 * @file
 * @auth jinguangguo@new4g.cn
 * @date 2016/8/14
 */

import gulp from 'gulp';
import gulpLess from 'gulp-less';

gulp.task('less', function () {
    return gulp.src('./static/less/index.less')
        .pipe(gulpLess())
        .pipe(gulp.dest('./dist/less'));
});