const gulp = require('gulp');
const twig = require('gulp-twig');
const sass = require('gulp-sass');

function Templates() {
    return gulp.src('src/*.html')
            .pipe(twig())
            .pipe(gulp.dest('.'));
}

function MinifyCSS() {
    return gulp.src(['src/scss/*.scss'], {
        allowEmpty: true,
    }).pipe(sass({
        outputStyle: 'compact',
        verbose: true,
    })).pipe(gulp.dest('./css'));
}

function MinifyJS() {
    return gulp.src(['src/scripts/*.js'], {
        allowEmpty: true,
    }).pipe(gulp.dest('./scripts'));
}

/*
function MinifySVG() {
    return gulp.src(['/src/svg/*.svg'], {
        allowEmpty: true,
    }).pipe(gulp.dest('./svg'));
}
*/

exports.MinifyCSS = MinifyCSS;

exports.Templates = Templates;
exports.Minify = gulp.parallel(MinifyCSS, MinifyJS); //MinifySVG

exports.Build = gulp.series(Templates, gulp.parallel(MinifyCSS, MinifyJS)); //MinifySVG