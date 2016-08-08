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
    gulp.src('./app/svg/*.svg')
        .pipe(iconfontCss({
            fontName: fontName,
            path: './app/font/template.less',
            targetPath: './font.less',
            fontPath: '/app/font/'
        }))
        .pipe(iconfont({
            fontName: fontName, // required
            prependUnicode: true, // recommended option
            formats: ['ttf', 'eot', 'woff', 'svg'], // default, 'woff2' and 'svg' are available
            timestamp: new Date().getTime()
        }))
        .pipe(gulp.dest('./app/font/'));
});
