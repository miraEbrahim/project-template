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
            sourcemap: true,
            optimization: 2
          },
          files: {
            "css/main.css": "src/less/*.less" ,
            "css/override.css": "src/sass/*.scss"
            },//
          }
        },
    
      
      watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint'],
        styles: {
            files: ['sass/*.scss',['less/*.less']],
            tasks: [['sass'],['less/*.less']],
            options: {
              nospawn: true
            }
          }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less', 'watch']);
  
  };