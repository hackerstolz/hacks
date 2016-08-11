'use strict';

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
    let stream = gulp.src([config.paths.tsFiles, 'typings/**/*.d.ts'])
        .pipe(sourcemaps.init())
        .pipe(typescript(project))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.paths.build));

    return stream;
});

gulp.task('clean', () => {
    return del(
        path.join(config.paths.build)
    );
});

gulp.task('watch', () => {
    nodemon({
        script: config.paths.build,
        watch: config.paths.tsFiles,
        ext: 'ts',
        tasks: ['build']
    })
        .on('quit', function () {
            process.exit()
        })
        .on('restart', () => { console.log('restarted') })

});

gulp.task('default', ['clean', 'build']);
