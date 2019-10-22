const gulp = require('gulp');
const twig = require('gulp-twig');
const sass = require('gulp-sass');

function Templates() {
    return gulp.src('src/*.html')
            .pipe(twig())
            .pipe(gulp.dest('.'));
}

function Minify() {
    return gulp.src(['C:/Users/wto6337/source/repos/GitHub/lindaprice/src/scss/*.scss'], {
        allowEmpty: true,
    }).pipe(sass({
        outputStyle: 'compressed',
        verbose: true,
    })).pipe(gulp.dest('./css'));
}

exports.Templates = Templates;
exports.Minify = Minify;