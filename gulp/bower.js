var gulp = require('gulp');
var bower = require('gulp-bower');

gulp.task('bower', () => {
  return bower({cmd: 'install' });
});
