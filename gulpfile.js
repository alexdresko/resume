var gulp = require('gulp');
const shell = require('gulp-shell')

gulp.task('default', () => {});

gulp.task('watch', shell.task([
    'sphinx-autobuild -B source build/html'
]));