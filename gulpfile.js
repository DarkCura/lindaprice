const gulp = require('gulp');
const twig = require('gulp-twig');

function Templates() {
    return gulp.src('src/*.html')
            .pipe(twig())
            .pipe(gulp.dest('dist'));
}

exports.Templates = Templates;