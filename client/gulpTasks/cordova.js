'use strict';

const gulp = require('gulp'),
    del = require('del'),
    config = require('./gulpConfig'),
    path = require('path'),
    sh = require('shelljs'),
    inject = require('gulp-inject'),
    runSequence = require('run-sequence');

const cordovaWwwFolder = path.join(config.targets.cordova, 'www');

function executeInCordovaFolder(action) {
    const currentDir = process.cwd();

    try {
        sh.cd(path.join(__dirname, '..', config.targets.cordova));
        action();
    }
    finally {
        sh.cd(currentDir);
    }
}

gulp.task('cordova:clean:all', () => del(config.targets.cordova));

gulp.task('cordova:clean:www', () => del(cordovaWwwFolder));

gulp.task('cordova:copy:config', () => {
    return gulp.src(config.sources.buildAssets.config)
        .pipe(gulp.dest(config.targets.cordova));
});

gulp.task('cordova:copy:cordovaJs', () => {
    return gulp.src(config.sources.buildAssets.cordovaJs)
        .pipe(gulp.dest(config.targets.cordova));
});

gulp.task('cordova:index', () => {
    const injectables = gulp.src(config.injectables,
        { read: false });

    return gulp.src(config.index)
        .pipe(inject(injectables, {
            addRootSlash: false,
            ignorePath: config.targets.build
        }))
        .pipe(inject(gulp.src(path.join(config.targets.cordova, 'cordova.js')), {
            addRootSlash: false,
            ignorePath: config.targets.cordova,
            name: 'cordova'
        }))
        .pipe(gulp.dest(config.targets.build));
});

gulp.task('cordova:copy:hooks', () => {
    return gulp.src(config.sources.buildAssets.hooks)
        .pipe(gulp.dest(path.join(config.targets.cordova, 'hooks')));
});

gulp.task('cordova:copy:app', () => {
    return gulp.src(path.join(config.targets.build, '**/*'))
        .pipe(gulp.dest(cordovaWwwFolder))
});

gulp.task('cordova:prepare', () => {
    executeInCordovaFolder(() => {
        sh.exec('$(npm bin)/cordova prepare');
    });
});

gulp.task('cordova:icon-and-splash', () => {
    return gulp.src(config.sources.buildAssets.icons)
        .pipe(gulp.dest(config.targets.cordova))
        .on('end', () => {
            executeInCordovaFolder(() => {
                sh.exec('$(npm bin)/cordova-icon');
                sh.exec('$(npm bin)/cordova-splash');
            });
        });
});

gulp.task('cordova-build', done => {
    runSequence(
        'dev-build',
        'cordova:clean:all',
        'cordova:copy:cordovaJs',
        'cordova:index',
        'cordova:copy:config',
        'cordova:copy:hooks',
        'cordova:copy:app',
        'cordova:prepare',
        'cordova:icon-and-splash',
        done
    );
});

gulp.task('cordova-update', done => {
    runSequence(
        'dev-build',
        'cordova:clean:www',
        'cordova:copy:cordovaJs',
        'cordova:index',
        'cordova:copy:config',
        'cordova:copy:hooks',
        'cordova:copy:app',
        'cordova:prepare',
        'cordova:icon-and-splash',
        done
    )
});
