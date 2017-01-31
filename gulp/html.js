var gulp = require('gulp');

gulp.task('html', function () {
  gulp.src('./app/*.*')
      .pipe(gulp.dest('dist'));
});

gulp.task('server', function () {
  gulp.src('./server.js')
      .pipe(gulp.dest('dist'));
});

gulp.task('projects', function () {
  gulp.src('./app/projects/**/*.*')
      .pipe(gulp.dest('dist/projects'));
});

gulp.task('docs', function () {
  gulp.src('./app/docs/**/*.*')
      .pipe(gulp.dest('dist/docs'));
});

gulp.task('templates', function () {
  return gulp.src('./app/templates/*.html')
      .pipe(gulp.dest('dist/templates'));
});

