var gulp = require('gulp');
var tslint = require('gulp-tslint');
var teamcity = require('gulp-tslint-teamcity');

gulp.task('lint', function () {
  gulp.src('app/*.ts')
    .pipe(tslint())
    .pipe(tslint.report(teamcity, {
      emitError: false
    }));
});