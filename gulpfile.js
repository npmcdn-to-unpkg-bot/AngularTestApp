var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var connect = require('gulp-connect');
var StringMap = require("stringmap");
var ngmin = require('gulp-ngmin');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('move_html', function() {
    gulp.src(['src/**/*.html'])
        .pipe(gulp.dest('./public'));
});

gulp.task('move_img', function() {
    gulp.src(['src/**/*.jpg','src/**/*.png','src/**/*.gif'])
        .pipe(gulp.dest('./public'));
});


gulp.task('move_lib', function() {
    gulp.src(['node_modules/angular*/angular*.js'])
        .pipe(gulp.dest('./public/lib'));
});

gulp.task('move_js', function() {
    gulp.src(['src/app.js',
            'src/services/**/*.js',
            'src/login/*.js',
            'src/registration/*.js',
            'src/book/*.js',
            'src/private/*.js',
            'src/routing/*.js',
        ])
        .pipe(sourcemaps.init())
        .pipe(ngmin())
        .pipe(ngAnnotate())
        .pipe(uglify()).on('error', errorHandler)
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('public/js'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['move_js']);
    gulp.watch('src/**/*.html', ['move_html']);
    gulp.watch('src/**/*.jpg',['move_img']);
    gulp.watch('src/**/*.png',['move_img']);
    gulp.watch('src/**/*.gif',['move_img']);

});

gulp.task('connect', function() {
    connect.server({
        root: 'public',
        port: 4000
    });
});

gulp.task('default', ['connect', 'move_html', 'move_lib', 'move_js','move_img', 'watch']);


function errorHandler(error) {
    console.log(error.toString());
    this.emit('end');
}
