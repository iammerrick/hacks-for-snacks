var gulp = require('gulp');
var jade = require('gulp-jade');
var data = require('gulp-data');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
  gulp.src('./src/*.jade')
    .pipe(data(function(file) {
      return {
        path: path.basename(file.path)
      }
    }))
    .pipe(jade({}))
    .pipe(gulp.dest('./compiled/'));

  gulp.src('./src/favicon.ico')
    .pipe(gulp.dest('./compiled/'));

  gulp.src('./src/public/images/**/*')
    .pipe(gulp.dest('./compiled/public/images/'));

  gulp.src('./src/public/scripts/**/*')
    .pipe(gulp.dest('./compiled/public/scripts/'));

    gulp.src('./src/public/stylesheets/**/*.css')
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('./compiled/public/stylesheets/'));

});

gulp.task('watch', function() {
  gulp.watch('src/**/*', ['default']);
});
