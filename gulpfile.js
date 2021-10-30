const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("style", function(){
    gulp.src("./scss/*.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest("./css"));
});