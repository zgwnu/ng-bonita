export default {
    entry: '../dist/index.js',
    dest: '../dist/bundles/zgwnu-bonita.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ng.zgwnu-bonita',
    globals: {
      '@angular/core': 'ng.core',
      '@angular/common': 'ng.common',
      '@angular/http': 'ng.http',
      '@angular/router': 'ng.router',
      '@angular/platform-browser': 'ng.platform-browser',
      'rxjs/Observable': 'Rx',
      'rxjs/ReplaySubject': 'Rx',
      'rxjs/add/operator/map': 'Rx.Observable.prototype',
      'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
      'rxjs/add/observable/fromEvent': 'Rx.Observable',
      'rxjs/add/observable/of': 'Rx.Observable'
    }
  }