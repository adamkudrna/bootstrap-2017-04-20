'use strict';

module.exports = {

  dist: {
    src: [
      '<%= paths.bower %>/jquery/dist/jquery.js',
      '<%= paths.bower %>/bootstrap/js/affix.js',
      '<%= paths.bower %>/bootstrap/js/alert.js',
      '<%= paths.bower %>/bootstrap/js/button.js',
      '<%= paths.bower %>/bootstrap/js/carousel.js',
      '<%= paths.bower %>/bootstrap/js/collapse.js',
      '<%= paths.bower %>/bootstrap/js/dropdown.js',
      '<%= paths.bower %>/bootstrap/js/modal.js',
      '<%= paths.bower %>/bootstrap/js/tooltip.js',
      '<%= paths.bower %>/bootstrap/js/popover.js',
      '<%= paths.bower %>/bootstrap/js/scrollspy.js',
      '<%= paths.bower %>/bootstrap/js/tab.js',
      '<%= paths.bower %>/bootstrap/js/transition.js'
    ],
    dest: '<%= paths.dist %>/js/main.js',
    options: {
      sourceMap: true,
    },
  },

};
