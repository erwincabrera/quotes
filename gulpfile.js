const gulp = require("gulp");
const sass = require("gulp-sass");

exports.default = function () {
  return gulp
    .src("./src/sass/**/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest("./dist/"));
};
