const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

sass.compiler = require("sass");

function css() {
  return gulp
    .src("./src/sass/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./dist/"));
}

function copy() {
  return gulp.src("./src/index.html").pipe(gulp.dest("./dist/"));
}

exports.default = gulp.parallel(css, copy);
