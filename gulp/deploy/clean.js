/**
 * Created by jinguangguo on 16/9/12.
 */

import gulp from 'gulp';
import clean from 'gulp-clean';

gulp.task('clean:dist', () => {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('clean:output', () => {
    return gulp.src('output', {read: false})
        .pipe(clean());
});