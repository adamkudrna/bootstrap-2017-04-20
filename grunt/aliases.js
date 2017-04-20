'use strict';

module.exports = {

  // Build
  // =====

  'build-css': [
    'less:core',
    'postcss:core',
    'postcss:core-min',
  ],

  'build-js': [
    'concat',
    'uglify',
  ],

  // Build CSS, JS and style guide.
  build: [
    'clean:temp',
    'build-css',
    'build-js',
    'copy',
  ],

  // Development
  // ===========

  // Serve the style guide to browser, watch the source files for changes and update them
  // automatically.
  serve: [
    'build',
    'browserSync:dev',
    'watch',
  ],

  // Default task
  // ============

  default: [
    'build',
  ],
};
