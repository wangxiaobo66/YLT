/**
 * Created by jinguangguo on 16/9/12.
 */

import gulp from 'gulp';
import clean from 'gulp-clean';

gulp.task('clean', () => {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});