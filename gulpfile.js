const { src, dest, parallel, series, watch } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const del = require('del');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const fileinclude = require('gulp-file-include');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const svgSprite = require('gulp-svg-sprite');
const image = require('gulp-image');
const htmlmin = require('gulp-htmlmin');
const groupMedia = require('gulp-group-css-media-queries');
const concat = require('gulp-concat');
const gulpif = require('gulp-if');
let isProd = false;

const resources = () => {
  return src('./src/resources/**')
    .pipe(dest('./app/resources'))
    .pipe(browserSync.stream());
};

const fonts = () => {
  return src('./src/fonts/**')
    .pipe(dest('./app/fonts/'))
    .pipe(browserSync.stream());
};

const img = () => {
  return src(['./src/img/**/*.{svg,jpg,jpeg,png,ico}'])
    .pipe(gulpif(isProd, image()))
    .pipe(dest('./app/img'))
    .pipe(browserSync.stream());
};

const htmlInclude = () => {
  return src(['./src/*.html'])
    .pipe(fileinclude())
    .pipe(dest('./app'))
    .pipe(browserSync.stream());
};

const styles = () => {
  return src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'expanded',
      }).on('error', notify.onError())
    )
    .pipe(groupMedia())
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./app/css/'))
    .pipe(browserSync.stream());
};

const scripts = () => {
  src('./src/js/vendor/**.js')
    .pipe(concat('vendor.js'))
    .pipe(gulpif(isProd, uglify().on('error', notify.onError())))
    .pipe(dest('./app/js/'));
  return src([
    './src/js/functions/**.js',
    './src/js/components/**.js',
    './src/js/main.js',
  ])
    .pipe(gulpif(!isProd, sourcemaps.init()))
    .pipe(concat('main.js'))
    .pipe(gulpif(isProd, uglify().on('error', notify.onError())))
    .pipe(gulpif(!isProd, sourcemaps.write('.')))
    .pipe(dest('./app/js'))
    .pipe(browserSync.stream());
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: './app',
    },
    notify: false,
  });

  watch('./src/scss/**/*.scss', styles);
  watch('./src/js/**/*.js', scripts);
  watch('./src/html/*.html', htmlInclude);
  watch('./src/*.html', htmlInclude);
  watch('./src/resources/**', resources);
  watch('./src/img/**/*.{svg,jpg,jpeg,png,ico}', img);
  watch('./src/img/svg/**.svg', svgSprites);
  watch('./src/fonts/**', fonts);
};

const clean = () => {
  return del(['app/*']);
};

const svgSprites = () => {
  src('./src/img/svg/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../icons.svg"
        }
      },
    }))
    .pipe(dest('./app/img/icons'));
    return del(['./app/img/svg']);
}

exports.fileinclude = htmlInclude;

exports.default = series(
  clean, htmlInclude, scripts, fonts, resources, styles, img, svgSprites, watchFiles);

const stylesBuild = () => {
  return src('./src/scss/**/*.scss')
    .pipe(
      sass({
        outputStyle: 'expanded',
      }).on('error', notify.onError())
    )
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(
      cleanCSS({
        level: 2,
      })
    )
    .pipe(dest('./app/css/'));
};

const htmlMinify = () => {
  return src('app/**/*.html')
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(dest('app'));
};

const toProd = (done) => {
  isProd = true;
  done();
};

exports.build = series(
  toProd,
  clean,
  parallel(htmlInclude, scripts, fonts, resources),
  stylesBuild,
  img,
  svgSprites,
  htmlMinify
);
