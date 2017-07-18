var gulp  = require('gulp');
var shell = require('gulp-shell');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  return gulp.src('./src/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/public/css'));
});

gulp.task('sass-watch', function () {
  gulp.watch('./src/styles/main.scss', ['sass']);
});

gulp.task('copy-assets', function () {
  return gulp.src('src/assets/**/*')
    .pipe( gulp.dest('dist/public/assets') );
});


gulp.task('watch', function () {
  gulp.watch([
    'src/assets/**/*'
  ], ['serve-watch']);

  gulp.watch([
    'src/styles/**/*.scss'
  ], ['sass-watch']);
});


gulp.task('default', ['copy-assets','sass','sass-watch']);
