module.exports = function(grunt) {
    require('jit-grunt')(grunt);
    grunt.initConfig({
      jshint: {
        files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        options: {
          globals: {
            jQuery: true
          }
        }
      },
      less: {
        development: {
          options: {
            compress: true,
            yuicompress: true,
            optimization: 2
          },
          files: {
            "css/main.css": "src/**/*.less" // destination file and source file
          }
        }
      },
      watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint'],
        styles: {
            files: ['less/**/*.less'], // which files to watch
            tasks: ['less'],
            options: {
              nospawn: true
            }
          }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('default', ['less', 'watch']);
  
  };