const gulp = require('gulp');

const config = {
  paths: {
    sass: [
      './src/scss/**/*.scss',
    ],
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 6',
      'ie 11',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  }
};

gulp.task('sass', () => {
  let postcss = require('gulp-postcss');
  let autoprefixer = require('autoprefixer');
  let sass = require('gulp-sass');

  gulp.src(config.paths.sass)
      .pipe(sass({
        outputStyle: 'expanded'
      }))
      .pipe(postcss([autoprefixer(config.autoprefixer)]))
      .pipe(gulp.dest('.'))
});

gulp.task('watch', () => {
  gulp.watch(config.paths.sass, ['sass'])
});

gulp.task('default', () => {
  gulp.start('sass', 'watch')
});
