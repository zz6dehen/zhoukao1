/*
 * @Author: 张哲 
 * @Date: 2018-12-03 09:25:07 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-12-03 09:37:36
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var mincss = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify')
console.log(gulp)

//起服务
gulp.task('webserver', function() {
    gulp.src('./src')
        .pipe(webserver({
            prot: 8000,
            open: true
        }))
})

//sass编译压缩
gulp.task('sass', function() {
    return gulp.src('./src/scss/index.scss')
        .pipe(sass())
        .pipe(mincss())
        .pipe(gulp.dest('./build/css'))
})

//js编译压缩
gulp.task('js', function() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./build/scripts'))
})



// gulp.task('wacth')