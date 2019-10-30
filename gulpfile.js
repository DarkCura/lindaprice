const gulp = require('gulp');
const twig = require('gulp-twig');
const sass = require('gulp-sass');

function Templates() {
    return gulp.src('src/*.html')
            .pipe(twig())
            .pipe(gulp.dest('.'));
}

function MinifyCSS() {
    return gulp.src(['C:/Users/wto6337/source/repos/GitHub/lindaprice/src/scss/*.scss'], {
        allowEmpty: true,
    }).pipe(sass({
        outputStyle: 'compressed',
        verbose: true,
    })).pipe(gulp.dest('./css'));
}

function MinifyJS() {
    return gulp.src(['C:/Users/wto6337/source/repos/GitHub/lindaprice/src/scripts/*.js'], {
        allowEmpty: true,
    }).pipe(gulp.dest('./scripts'));
}

/*
function MinifySVG() {
    return gulp.src(['C:/Users/wto6337/source/repos/GitHub/lindaprice/src/svg/*.svg'], {
        allowEmpty: true,
    }).pipe(gulp.dest('./svg'));
}
*/

exports.Templates = Templates;
exports.Minify = gulp.parallel(MinifyCSS, MinifyJS); //MinifySVG

exports.Build = gulp.series(Templates, gulp.parallel(MinifyCSS, MinifyJS)); //MinifySVG