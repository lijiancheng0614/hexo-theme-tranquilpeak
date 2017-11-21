module.exports = function(grunt) {
  var website = {};
  website['source/assets/js/script.min.js'] = ['source/assets/js/script.js'];
  grunt.config.set('uglify', {
    // Minify `script.js` file into `script.min.js`
    prod: {
      options: {
        mangle: {
          except: [
            'jQuery',
            'fancybox'
          ]
        }
      },
      files: website
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
};
