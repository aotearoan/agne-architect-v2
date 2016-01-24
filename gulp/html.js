var gulp = require('gulp');

gulp.task('html', function () {
  gulp.src('./app/*.*')
      .pipe(gulp.dest('dist'));
});

gulp.task('templates', function () {
  return gulp.src('./app/templates/*.html')
      .pipe(gulp.dest('dist/templates'));
});

