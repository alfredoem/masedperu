var gulp = require('gulp');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');
var rename = require('gulp-rename');


gulp.task('bootstrap', function(){

    gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('public/libs/bootstrap'));

    gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest('public/libs/bootstrap'));

    gulp.src('node_modules/bootstrap/dist/fonts/*.*')
            .pipe(gulp.dest('public/libs/fonts'));
});

gulp.task('jquery', function(){

    gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('public/libs/jquery'));

});

gulp.task('font-awesome', function(){

    gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest('public/libs/font-awesome'));

    gulp.src('node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('public/libs/fonts'));

});

gulp.task('build', ['bootstrap', 'jquery', 'font-awesome']);


gulp.task('watch', function(){
    livereload.listen();
    gulp.watch([
        'resources/views/*.blade.php',
        'resources/views/**/*.blade.php',
        'resources/views/**/**/*.blade.php',
        'public/css/**/*.*',
        'public/css/*.*'
    ], livereload.reload);
});


