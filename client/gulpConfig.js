const config = {
    systemJsConfig: './systemConfig.js',
    ts: {
        config: './tsconfig.json'
    },
    source: {
        folder: './src/',
        files: {
            injectables: [
                './dist/www/scripts/vendor.min.js',
                './dist/www/scripts/system.min.js',
                './dist/www/scripts/systemSetup.js',
                './dist/www/css/vendor.min.css',
                './dist/www/css/app.css',
                './dist/www/scripts/shim.min.js',
                './dist/www/scripts/zone.js',
                './dist/www/scripts/reflect.js'
            ],
            main: [
                './src/index.html'
            ],
            systemSetupScript: './src/systemSetup.js',
            app: {
                everything: ['./src/app/**/*', './src/less/**/*.less', './src/systemSetup.js'],
                ts: [
                    './src/app/**/*.ts'
                ],
                html: [
                    './src/app/**/*.html'
                ],
                less: [
                    './src/less/app.less'
                ],
                css: [
                    './src/css/**/*.css'
                ],
                componentCss: [
                    './src/app/**/*.css'
                ],
                assets: [
                    './src/assets/**/*.*'
                ]
            },
            cordova: '',
            vendorStylesheets: [],
            vendorFonts: [],
            shim: [
                './node_modules/es6-shim/es6-shim.min.js'
            ],
            vendorJs: [], //  './src/vendor/hammerjs/hammer.js', './src/vendor/fastclick/fastclick.js', './src/vendor/leaflet-js/leaflet-src.js'
            angular2deps: [
                './node_modules/core-js/client/shim.min.js',
                './node_modules/zone.js/dist/zone.js',
                './node_modules/reflect-metadata/reflect.js'
            ],
            angular2: './node_modules/@angular/**/*',
            rxjs: './node_modules/rxjs/**/*',
            systemJs: './node_modules/systemjs/dist/system.src.js'
        }
    },
    targets: {
        systemMinJs: 'system.min.js',
        vendorMinJs: 'vendor.min.js',
        vendorMinCss: 'vendor.min.css',
        buildFolder: './dist/www',
        resourcesFolder: './resources/',
        hooksFolder: './cordova/hooks/',
        appFolder: 'app',
        stylesFolder: 'css',
        minified: {
            js: 'app.js',
            css: 'app.css',
            templateCache: 'ng-templates.js'
        }
    }
};

module.exports = config;
