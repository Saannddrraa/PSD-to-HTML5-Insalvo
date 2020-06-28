const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


gulp.task('sass', async function () {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
})

gulp.task('watch', gulp.series('sass', async function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch(('./src/sass/**/*.scss'), gulp.series('sass'));
    gulp.watch('./*.html').on('change', browserSync.reload);
}))