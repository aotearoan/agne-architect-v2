var config = require('./config.json');

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src(['app/js/modules/*.js','app/js/*app.js'])
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(jshint.reporter('fail'))
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .pipe(concat('app.min.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./dist/js/'));
});

gulp.task('vendor-scripts', function() {
  return gulp.src(config.paths.vendorjs)
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .pipe(concat('vendor.min.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./dist/js/'));
});
