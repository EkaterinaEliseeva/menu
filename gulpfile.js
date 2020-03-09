const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const server = require('browser-sync').create();
const minify = require('gulp-csso');
const del = require('del');
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const copy = require('gulp-copy');
const babel = require('gulp-babel');

gulp.task("clean", function () {
    return del("build");
});

gulp.task("css", function () {
    return gulp.src("src/scss/styles.scss")
        .pipe(plumber())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(minify())
        .pipe(gulp.dest("build/css"))
        .pipe(server.stream());
});

gulp.task("copy", function () {
    return gulp.src("src/fonts/*")
        .pipe(gulp.dest("build/fonts"))
});

gulp.task("plugins", function () {
    return gulp.src("src/plugins/*")
        .pipe(gulp.dest("build/plugins"))
});

gulp.task("img", function () {
    return gulp.src("src/img/*")
        .pipe(gulp.dest("build/img"))
});

gulp.task('html', function() {
    return gulp
        .src("src/*.html")
        .pipe(gulp.dest('build'))
});

gulp.task('js', function() {
    return gulp
        .src("src/js/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest("build/js"))
});


gulp.task("server", function () {
    server.init({
        server: "build/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.task("refresh", function (done) {
        server.reload();
        done();
    });


    gulp.watch("src/scss/**/*", gulp.series("css"));
    gulp.watch("src/img/*.{png,jpeg,jpg,svg}", gulp.series("img", "refresh"));
    // gulp.watch("src/img/svg/*.svg", gulp.series("svg", "refresh"));
    gulp.watch("src/**/*.html", gulp.series("html", "refresh"));
    gulp.watch("src/js/*.js", gulp.series("js", "refresh"));
});

gulp.task("build", gulp.series(
    "clean",
    "copy",
    "plugins",
    "img",
    // "svg",
    "css",
    "js",
    "html"
));

gulp.task("start", gulp.series("build", "server"));
