var gulp = require('gulp');
var jade = require('gulp-jade');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
  gulp.src('./src/*.jade')
    .pipe(jade({
    }))
    .pipe(gulp.dest('./compiled/'));

  gulp.src('./src/public/**/*')
    .pipe(gulp.dest('./compiled/public/'));

    gulp.src('./src/public/stylesheets/**/*.css')
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('./compiled/public/stylesheets/'));

});

gulp.task('watch', function() {
  gulp.watch('src/**/*', ['default']);
});
