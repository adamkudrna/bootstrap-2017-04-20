'use strict';

module.exports = {

  core: {
    options: {
      map: true,
      processors: [
        require('autoprefixer')(),
      ],
    },
    src: '<%= paths.dist %>/css/main.css',
  },
  'core-min': {
    options: {
      map: true,
      processors: [
        require('cssnano')({
          autoprefixer: false,
          mergeRules: false,
          zindex: false,
        }),
      ],
    },
    src: '<%= paths.dist %>/css/main.css',
    dest: '<%= paths.dist %>/css/main.min.css',
  },

};
