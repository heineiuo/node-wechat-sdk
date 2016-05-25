var gulp = require('gulp');
var rollup = require('rollup').rollup;
var commonjs = require('rollup-plugin-commonjs');
var nodeResolve = require('rollup-plugin-node-resolve');

gulp.task('script', function () {
  return rollup({
    entry: 'src/index.js',
    plugins: [
      nodeResolve({ jsnext: true }),
      commonjs()
    ]
  }).then(function (bundle) {
    return bundle.write({
      format: 'iife',
      dest: 'dist/index.js'
    });
  });
});