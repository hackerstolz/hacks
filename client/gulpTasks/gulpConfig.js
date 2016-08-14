'use strict';

const currentPackage = require('../package.json');

const config = {
    module: currentPackage.name,
    base: 'src',
    index: 'src/index.html',
    systemJs: 'src/systemSetup.js',
    sources: {
        scripts: [
            'src/**/*.ts',
            'typings/index.d.ts'
        ],
        templates: [
            'src/**/*.html'
        ],
        styles: {
            all: ['src/less/**/*.less'],
            main: [
                'src/less/app.less'
            ]
        }
    },
    targets: {
        build: 'build',
        lib: 'build/lib'
    },
    typescript: {
        target: 'ES5',
        module: 'system',
        moduleResolution: 'node',
        declaration: false,
        sourceMap: true,
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        removeComments: false,
        noImplicitAny: false
    },
    browsers: ['IE >= 11', 'last 2 versions'],
    browserSync: {
        // Turn off cross-device sync features
        ghostMode: false,
        open: true,
        server: {
            baseDir: './build',
            middleware: { }
        }
    },
    vendorScripts: [
        'node_modules/core-js/client/shim.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/systemjs/dist/system.src.js',
    ],
    nodeModules: [
        '@angular',
        'rxjs'
    ]
};

module.exports = config;
