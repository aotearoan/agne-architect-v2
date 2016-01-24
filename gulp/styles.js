var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  return gulp.src('app/sass/app.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(minifyCSS({comments:true,spare:true}))
      .pipe(rename({extname: '.min.css'}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./dist/css/'));
});

gulp.task('vendor-styles', function() {
  gulp.src('app/sass/vendor.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(minifyCSS({comments:true,spare:true}))
      .pipe(rename({extname: '.min.css'}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./dist/css/'));
});
