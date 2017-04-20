'use strict';

module.exports = function (grunt) {

  var options = {
    pkg: grunt.file.readJSON('package.json'),

    paths: {
      bower: 'bower_components',
      dist: '.',
      grunt: 'grunt',
      src: '.',
      templates: '.',
      temp: '.tmp',
    },
  };

  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt, { config: options });

  // See the `grunt/` directory for individual task configurations.
};
