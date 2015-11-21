import gulp from 'gulp';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import header from 'gulp-header';
import sass from 'gulp-sass';
import minify from 'gulp-minify-css';
import livereload from 'gulp-livereload';
import pkg from './package.json';

 // Template for banner
const banner = `/*! ${pkg.name.charAt(0).toUpperCase()}${pkg.name.slice(1)} v${pkg.version} | ${pkg.license} | (c) ${new Date().getFullYear()} ${pkg.author.name} */
`;

// Paths
const paths = {
  src: 'src/{,*/}*.{scss,sass}',
  dest: 'dist/'
};

// Process and minify Sass files
gulp.task('build:styles', () => {
  const pipe = gulp.src(paths.src)
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded',
      sourceComments: false
    }))
    .pipe(gulp.dest(paths.dest))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(minify())
    .pipe(header(banner, {pkg}))
    .pipe(gulp.dest(paths.dest));
  return pipe;
});

// Spin up livereload server and listen for file changes
gulp.task('listen', () => {
  livereload.listen();
  gulp.watch(paths.src).on('change', () => gulp.start('refresh'));
});

// Refresh task
gulp.task('refresh', ['compile'], () => livereload.changed());

// Compile task
gulp.task('compile', ['build:styles']);

// Watch task
gulp.task('watch', [
  'build:styles',
  'listen'
]);
