const gulp = require('gulp');
const { series, parallel } = require('gulp')
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const rename = require("gulp-rename");
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const { notify } = require('browser-sync');
const browserSync = require('browser-sync').create();
const del = require('del');


const html = () => {
    return gulp.src('src/pug/*.pug')
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('build'))
}

const styles = () => {
    return gulp.src('src/style/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('build/css'))

}

const script = () => {
    return gulp.src('src/scripts/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('build/js'))
}

const img = () => {
    return gulp.src('src/img/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
}

const server = () => {
    browserSync.init({
        server: {
            baseDir: './build'
        },
        notify: false
    });
    browserSync.watch('build', browserSync.reload)
}

const dellBuild = (cb) => {
    return del('build/**/*.*').then(() => { cb() })
}

const watch = () => {
    gulp.watch('src/pug/**/*.*', html);
    gulp.watch('src/style/**/*.scss', styles);
    gulp.watch('src/scripts/**/*.js', script);
    gulp.watch('src/img/**/*.*', img);
}

exports.default = series(
    dellBuild,
    parallel(html, styles, script, img),
    parallel(watch, server)
)