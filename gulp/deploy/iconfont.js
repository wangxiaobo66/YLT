/**
 * @file
 * @author jinguangguo
 * @date 2016/5/27
 */

import gulp from 'gulp';
import iconfont from 'gulp-iconfont';
import iconfontCss from 'gulp-iconfont-css';

let fontName = 'Icons';

gulp.task('iconfont', function() {
    gulp.src('./static/svg/*.svg')
        .pipe(iconfontCss({
            fontName: fontName,
            path: './static/font/template.scss',
            targetPath: './font.scss',
            fontPath: '../../font/'
        }))
        .pipe(iconfont({
            fontName: fontName, // required
            prependUnicode: true, // recommended option
            formats: ['ttf', 'eot', 'woff', 'svg'], // default, 'woff2' and 'svg' are available
            timestamp: new Date().getTime()
        }))
        .pipe(gulp.dest('./static/font/'));
});
