'use strict';

module.exports = {

  options: {
    preserveComments: 'some',
  },
  dist: {
    files: {
      '<%= paths.dist %>/js/main.min.js': '<%= paths.dist %>/js/main.js',
    },
  },

};
