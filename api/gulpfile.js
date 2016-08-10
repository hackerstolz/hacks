const gulp = require('gulp'),
    del = require('del'),
    path = require('path'),
    merge = require('merge2'),
    typescript = require('gulp-typescript'),
    config = require('./gulpConfig'),
    sourcemaps = require('gulp-sourcemaps'),
    nodemon = require('gulp-nodemon');

const project = typescript.createProject(config.files.tsConfig);

gulp.task('build', ['clean'], () => {
    console.log('build');
    return gulp.src([config.paths.tsFiles, 'typings/**/*.d.ts'])
        .pipe(sourcemaps.init())
        .pipe(typescript(project))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.build));
});

gulp.task('clean', () => {
    return del(
        path.join(config.paths.build)
    );
});

gulp.task('serve', ['build'], () => {
    nodemon({
        script: path.join(config.paths.build, 'index.js'),
        ext: 'js'
    });
});

/*gulp.task('watch', ['build', 'serve'], () => {
    gulp.watch(config.paths.tsFiles, ['serve']);
});*/

gulp.task('default', ['clean', 'build']);
