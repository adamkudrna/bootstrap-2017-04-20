'use strict';

module.exports = {

  dev: {
    bsFiles: {
      src: [
        '<%= paths.dist %>/css/*.css',
        '<%= paths.dist %>/js/*.js',
        '<%= paths.dist %>/*.html',
      ],
    },
    options: {
      server: {
        baseDir: "./"
      },
      watchTask: true,
    },
  },

};
