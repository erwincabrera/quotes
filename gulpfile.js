const gulp = require("gulp");
const sass = require("gulp-sass");

function css() {
  return gulp
    .src("./src/sass/**/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest("./dist/"));
}

function copy() {
  return gulp.src("./src/index.html").pipe(gulp.dest("./dist/"));
}

exports.default = gulp.parallel(css, copy);
