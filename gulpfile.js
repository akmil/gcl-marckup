var gulp  = require('gulp');
var shell = require('gulp-shell');

gulp.task('sass', ['sass-watch'], shell.task([
  'sass src/styles/main.scss:dist/public/css/main.css --sourcemap=inline --scss --style=nested'
]));

gulp.task('watch', function () {
  /*gulp.watch([
    'scripts/api-explorer/v2/src/!**!/!*.js',
    'scripts/api-explorer/v2/!**!/!*.json'
  ], ['serve-watch']);*/

  gulp.watch([
    'src/styles/**/*.scss'
  ], ['sass-watch']);

  /*gulp.watch([
    '_includes/!**!/!*.html',
    'scripts/pages/!**!/!*.js'
  ], ['serve-watch']);*/
});


gulp.task('default', ['sass-watch']);
