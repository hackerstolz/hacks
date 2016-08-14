/**
 * System configuration for Angular 2.
 */
(function (global) {
    // map tells the System loader where to look for things
    var map = {
        'app': 'app', // 'dist',
        '@angular': 'lib/@angular',
        'rxjs': 'lib/rxjs'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'main.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' },
        '@angular/common': { main: 'index.js', defaultExtension: 'js' },
        '@angular/compiler': { main: 'index.js', defaultExtension: 'js' },
        '@angular/core': { main: 'index.js', defaultExtension: 'js' },
        '@angular/forms': { main: 'index.js', defaultExtension: 'js' },
        '@angular/http': { main: 'index.js', defaultExtension: 'js' },
        '@angular/platform-browser': { main: 'index.js', defaultExtension: 'js' },
        '@angular/platform-browser-dynamic': { main: 'index.js', defaultExtension: 'js' },
        '@angular/router': { main: 'index.js', defaultExtension: 'js' },
    };

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);
})(this);

function backupModule() {
    return new Promise(function (resolve, reject) {
        if (typeof module !== 'undefined' && module.hasOwnProperty('exports')) {
            window.module = module;
            module = undefined;
        }
        resolve(true);
    });
}

function restoreModule() {
    return new Promise(function (resolve, reject) {
        if (window.hasOwnProperty('module')) {
            module = window.module;
        }
        resolve(true);
    });
}

backupModule()
    .then(function () {
        return restoreModule();
    })
    .then(function () {
        return System.import('app/main');
    })
    .then(null, console.error.bind(console));
