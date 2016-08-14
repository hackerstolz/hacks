'use strict';

const gulp = require('gulp'),
    del = require('del'),
    config = require('./gulpConfig'),
    tslint = require('gulp-tslint'),
    sourceMaps = require('gulp-sourcemaps'),
    inlineNg2Template = require('gulp-inline-ng2-template'),
    tsc = require('gulp-typescript'),
    count = require('gulp-count'),
    less = require('gulp-less'),
    batch = require('gulp-batch'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    runSequence = require('run-sequence'),
    path = require('path'),
    browserSync = require('browser-sync').create(),
    inject = require('gulp-inject');

gulp.task('dev:clean', () => del(config.targets.build));

gulp.task('dev:lint', () => {
    return gulp.src(config.sources.scripts)
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(tslint.report({ emitError: false }));
});

function createTypeScriptPipe(sources, fastTranspilation) {
    const tsOptions = Object.assign({}, config.typescript, {
        isolatedModules: !!fastTranspilation
    });

    const ts = sources
        .pipe(sourceMaps.init())
        .pipe(inlineNg2Template({
            useRelativePaths: true
        }))
        .pipe(tsc(tsOptions));

    return ts.js
        .pipe(count('Transpiled ## files'))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest(config.targets.build))
        .on('end', () => browserSync.reload());
}

gulp.task('dev:scripts', () => createTypeScriptPipe(gulp.src(config.sources.scripts)));

gulp.task('dev:scripts:watch', () => watch([...config.sources.scripts, ...config.sources.templates],
    batch(events => createTypeScriptPipe(events, true))));

function createLessPipe(sources) {
    return sources
        .pipe(sourceMaps.init())
        .pipe(less())
        .pipe(autoprefixer({ browsers: config.browsers }))
        .pipe(count('Preprocessed ## style files'))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest(`${config.targets.build}/css`))
        .pipe(browserSync.stream({ match: '**/*.css' }));
}

gulp.task('dev:styles', () => createLessPipe(gulp.src(config.sources.styles.main)));

gulp.task('dev:styles:watch', () => watch(config.sources.styles.all,
    batch(events => createLessPipe(gulp.src(config.sources.styles.main)))));

gulp.task('dev:watch:init', done => {
    browserSync.init(config.browserSync, done);
});

gulp.task('dev:vendorScripts', () => {
    return gulp.src(config.vendorScripts)
        .pipe(gulp.dest(config.targets.lib));
});

gulp.task('dev:nodeModules', () => {
    return gulp.src(config.nodeModules.map(m => path.join('node_modules', m, '**/*')), { base: 'node_modules' })
        .pipe(gulp.dest(config.targets.lib));
});

gulp.task('dev:systemJs', () => {
    return gulp.src(config.systemJs)
        .pipe(gulp.dest(config.targets.build))
        .on('end', () => browserSync.reload());
});

gulp.task('dev:systemJs:watch', () => watch(config.systemJs,
    batch((events, done) => runSequence('dev:systemJs', done))));

gulp.task('dev:index', () => {
    const injectables = gulp.src([
            ...config.vendorScripts.map(v => path.join(config.targets.lib, v.split('/').slice(-1)[0])),
            path.join(config.targets.build, config.systemJs.split('/').slice(-1)[0]),
            path.join(config.targets.build, '**/*.css')
        ],
        { read: false });

    return gulp.src(config.index)
        .pipe(inject(injectables, {
            addRootSlash: false,
            ignorePath: config.targets.build
        }))
        .pipe(gulp.dest(config.targets.build))
        .on('end', () => browserSync.reload());
});

gulp.task('dev:index:watch', () => watch(config.index,
    batch((events, done) => runSequence('dev:index', done))));

gulp.task('dev-build', done => {
    runSequence(
        'dev:clean',
        // We need to define useful rules, before using this.
        // 'dev:lint',
        [
            'dev:vendorScripts',
            'dev:nodeModules',
            'dev:scripts',
            'dev:styles',
            'dev:systemJs'
        ],
        'dev:index',
        done
    );
});

gulp.task('dev-watch', done => {
    runSequence(
        'dev-build',
        'dev:watch',
        done
    );
});

gulp.task('dev:watch', done => {
    runSequence(
        'dev:watch:init',
        [
            'dev:scripts:watch',
            'dev:styles:watch',
            'dev:systemJs:watch',
            'dev:index:watch'
        ],
        done
    );
});
