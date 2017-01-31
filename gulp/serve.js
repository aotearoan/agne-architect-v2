var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['dist'], function() {
  browserSync.init({
    server: "./dist"
  });

  gulp.watch('app/sass/**/*.scss',['styles']).on('change', browserSync.reload);
  gulp.watch('app/img/**/*.*',['images']).on('change', browserSync.reload);
  gulp.watch('app/js/**/*.js',['scripts']).on('change', browserSync.reload);
  gulp.watch('app/templates/**/*.html',['templates']).on('change', browserSync.reload);
  gulp.watch('app/*.*',['html', 'projects', 'docs', 'server']).on('change', browserSync.reload);
});
