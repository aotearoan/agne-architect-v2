var gulp = require('gulp');

gulp.task('images', function () {
  return gulp.src('./app/img/**/*.*')
      .pipe(gulp.dest('dist/img'));
});

