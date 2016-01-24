var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dist', function() {
  return runSequence(
      ['clean'],
      ['vendor-styles', 'vendor-scripts'],
      ['styles', 'images', 'scripts', 'templates', 'html']);
});
