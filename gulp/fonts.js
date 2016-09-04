var gulp = require('gulp');

gulp.task('fonts', function () {
  gulp.src('./app/fonts/**/*.*')
      .pipe(gulp.dest('dist/fonts'));
});
