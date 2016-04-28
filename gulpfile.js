var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var connect = require('gulp-connect');

gulp.task('move_html', function(){
      gulp.src(['src/**/*.html'])
      .pipe(gulp.dest('./public'));
    });

gulp.task('move_lib', function(){
          gulp.src(['node_modules/angular*/angular*.js'])
          .pipe(gulp.dest('./public/lib'));
        });

gulp.task('move_js', function () {
  gulp.src(['src/app.js',
            'src/services/**/*.js',
            'src/login/*.js',
            'src/registration/*.js',
            'src/book/*.js',
            'src/private/*.js',
            'src/home/*.js',
          ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['move_js']);
	gulp.watch('src/**/*.html', ['move_html']);
});

gulp.task('connect', function () {
    connect.server({
        root: 'public',
        port: 4000
    });
});

gulp.task('default', ['connect', 'move_html','move_lib','move_js','watch']);