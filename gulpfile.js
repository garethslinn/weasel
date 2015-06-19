var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var compass = require('gulp-compass');
var path = require('path');
var sassOptions = {
    outputStyle:'compressed'
};

var config = {
    styles :{
        src: 'src/scss/*.scss',
        build: 'dist/css',
        output: 'app.css',
        css: 'src/css'
    },
    scripts: {
        src: 'src/js/*.js',
        build: 'dist/scripts/main.js',
        output: 'main.js'
    },
    sprites: {
        src: 'src/css/screen.css',
        scss: 'src/spriteSass/screen.scss',
        output: 'screen.css',
        build: 'dist/css',
        images: 'src/images',
        css: 'src/css',
        sass: 'src/spriteSass' 
    },
    images: {
        src: 'src/images/*.png',
        build: 'dist/images',
    }
};

gulp.task('css', function () {
    return gulp
        .src(config.styles.src)
        .pipe( sourcemaps.init() )
        .pipe(sass( sassOptions ).on('error', sass.logError))
        .pipe( sourcemaps.write() )
        // .pipe(sass())
        .pipe(concat(config.styles.output))
        .pipe(gulp.dest(config.styles.css))
        //.pipe(minifyCSS())
        .pipe(gulp.dest(config.styles.build));
});

gulp.task('sprites', function() {
     return  gulp.src(config.sprites.src)
        .pipe(gulp.dest(config.sprites.build));
});

gulp.task('images', function() {
     return  gulp.src(config.images.src)
        .pipe(gulp.dest(config.images.build));
});

gulp.task('compass', function() { 
    return gulp.src(config.sprites.scss)
        .pipe(compass({
            images: config.sprites.images,
            css: config.sprites.css,
            sass: config.sprites.sass  
        }))
});

gulp.task('scripts', function() {
    return gulp
        .src(config.scripts.src)
        .pipe(uglify())
        // .pipe(concat(config.scripts.output))
        .pipe(gulp.dest(config.scripts.build));
});

gulp.task('watch', function () {
    gulp.watch(config.styles.src, ['css']);
    gulp.watch(config.sprites.scss, ['compass']);
    // gulp.watch(config.scripts.src, ['scripts']);
});

gulp.task('default', ['css', 'sprites', 'images', 'compass', 'watch']);