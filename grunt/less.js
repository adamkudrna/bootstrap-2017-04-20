'use strict';

module.exports = {

  core: {
    options: {
      strictUnits: true,
      sourceMap: true,
      sourceMapFilename: '<%= paths.temp %>/css/main.css.map',
      sourceMapURL: 'main.css.map',
      sourceMapRootpath: '../',
    },
    files: {
      '<%= paths.dist %>/css/main.css': '<%= paths.src %>/less/main.less',
    },
  },

};
