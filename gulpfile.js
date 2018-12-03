var gulp = require('gulp');
var sass = require('gulp-sass')
var webserver = require('gulp-webserver')
console.log(gulp)

gulp.task('webserver', function() {
    gulp.src('./src')
        .pipe(webserver({
            prot: 8000,
            open: true
        }))
})