const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-tinypng');
const browserSync = require('browser-sync').create();



function style() {
    return gulp.src('./src/style/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['> 0.1%'],
            cascade: false
        }))
        .pipe(gcmq())
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./dest'))
        .pipe(browserSync.stream());
}

function script() {
    return gulp.src('./src/js/*.js')
        .pipe(browserSync.stream())
}

function html() {
    return gulp.src('./index.html')
        .pipe(browserSync.stream());
}

function css() {
    return gulp.src('./src/style/*.css')
        .pipe(browserSync.stream());
}

function imgmin() {
    return gulp.src('./src/img/*.*')
        .pipe(imagemin('MSpvV5bZTFm2WspqpS05O88MALjksI22'))
        .pipe(gulp.dest('dest'));
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/style/*.scss', style)
    gulp.watch('./src/js/*.js', script)
    gulp.watch('./*.html', html)
    gulp.watch('./src/style/*.css', css)
    gulp.watch('./src/img/*', imgmin)
}

gulp.task('watch', watch)