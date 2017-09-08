import resolve from 'rollup-plugin-node-resolve';

const globals = {
  '@angular/core': 'ng.core',
  '@angular/common': 'ng.common',
  '@angular/http': 'ng.http',
  'rxjs/Observable': 'Rx',
  'rxjs/observable/ErrorObservable': 'Rx',
  'rxjs/add/operator/map': 'Rx.Observable',
  'rxjs/add/operator/catch': 'Rx.Observable',
  'rxjs/add/observable/throw': 'Rx.Observable',
};

export default {
  input: '../../dist/ng-bonita.js',
  output: { 
      file : '../../dist/bundles/ng-bonita.umd.js',
      format: 'umd',
  }, 
  exports: 'named',
  name: 'zgwnu.ng-bonita',
  plugins: [resolve()],
  external: Object.keys(globals),
  globals: globals
};