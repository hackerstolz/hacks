'use strict';

const gulp = require('gulp'),
    del = require('del'),
    config = require('./gulpConfig'),
    path = require('path'),
    symdest = require('gulp-symdest'),
    electron = require('gulp-atom-electron'),
    fs = require('fs'),
    runSequence = require('run-sequence');

gulp.task('electron:clean', () => del(config.targets.electron));

function buildAppFor(targetPlatform, target) {
    return gulp.src([
        path.join(config.targets.build, '**', '*'),
        config.sources.buildAssets.electron
    ])
        .pipe(electron({
            version: '1.3.3',
            platform: targetPlatform,
            arch: 'x64',
            companyName: 'Thinktecture AG',
            linuxExecutableName: config.name,
            darwinIcon: path.join(config.sources.buildAssets.iconsFolder, 'icon.icns'),
            winIcon: path.join(config.sources.buildAssets.iconsFolder, 'icon.ico')
        }))
        .pipe(symdest(path.join(config.targets.electron, target)));
}

gulp.task('electron:create-package-json', () => {
    const packageJson = {
        name: config.name,
        version: config.version,
        main: 'index.js'
    };

    fs.writeFileSync(path.join(config.targets.build, 'package.json'), JSON.stringify(packageJson));
});

gulp.task('electron:build-windows', () => {
    return buildAppFor('win32', 'windows');
});

gulp.task('electron:build-osx', () => {
    return buildAppFor('darwin', 'osx');
});

gulp.task('electron:build-linux', () => {
    return buildAppFor('linux', 'linux');
});

gulp.task('electron:build-apps', done => {
    runSequence(
        'electron:build-windows',
        'electron:build-osx',
        'electron:build-linux',
        done
    );
});

gulp.task('electron-build', done => {
    runSequence(
        'dev-build',
        'electron:clean',
        'electron:create-package-json',
        'electron:build-apps',
        done
    );
});
