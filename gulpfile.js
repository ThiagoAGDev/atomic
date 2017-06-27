// Include gulp
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var sass = require('gulp-sass');
 
// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('sass/**/*.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// Compile our JS
gulp.task('compress', function (cb) {
  pump([
        gulp.src('js/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('sass/**/*.sass', ['sass']);
    gulp.watch('js/**/*.js', ['compress']);
});

// Default Task
gulp.task('default', ['sass', 'watch', 'compress']);