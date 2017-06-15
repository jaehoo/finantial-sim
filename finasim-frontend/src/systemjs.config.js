(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'app': 'dist', // 'dist',
        'rxjs': 'node_modules/rxjs',
        '@angular': 'node_modules/@angular',
        'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
        '@angular/animations/browser':'node_modules/@angular/animations/bundles/animations-browser.umd.js',
        '@angular/platform-browser/animations': 'node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd.js',
        'hammerjs':'node_modules/hammerjs/hammer.js',
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app': { main: 'bootstrap.js', defaultExtension: 'js' },
        'rxjs': { defaultExtension: 'js' }
    };

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'testing',
        'router',
        'forms',
        'http',
        'animations',
        'material',

    ];

    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    }

    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);

    var config = {
        map: map,
        packages: packages
    }

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);


// /**
//  * System configuration for Angular samples
//  * Adjust as necessary for your application needs.
//  */
// (function (global) {
//   System.config({
//     paths: {
//       // paths serve as alias
//       'npm:': 'node_modules/'
//     },
//     // map tells the System loader where to look for things
//     map: {
//       // our app is within the app folder
//       'app': 'dist',

//       // angular bundles
//       '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
//       '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
//       '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
//       '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
//       '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
//       '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
//       '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
//       '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
//       '@angular': 'node_modules/@angular',

//       // other libraries
//       'rxjs':                      'npm:rxjs',
//       'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
//     },
//     // packages tells the System loader how to load when no filename and/or no extension
//     packages: {
//       app: { defaultExtension: 'js',   meta: { './*.js': {
//             loader: 'systemjs-angular-loader.js'
//           }
//         }
//       },
//       rxjs: {
//         defaultExtension: 'js'
//       }
//     }
//   });
// })(this);
