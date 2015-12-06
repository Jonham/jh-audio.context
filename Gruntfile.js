module.exports = function(grunt) {
//  grunt.loadNpmTasks('grunt-contrib-watch');
//  grunt.loadNpmTasks('grunt-contrib-jshint');
  require('load-grunt-tasks')(grunt);
  
  grunt.initConfig({
    jshint: {
      js: {
        src: 'src/js/**/*.js'
      }
    },
    concat: {
      js: {
        files: {
          "www/js/app.js": 'src/js/*.js'
        }
      }
    },
    uglify: {
      options: {
        compress: {
          dead_code: true,
        }
      },
      compress: {
        src: '<%= concat.js.files %>',
        dest: '<%= concat.js.files %>'.replace('.js', '.min.js')
      }
    },
    connect: {
      server: {
        options: {
          base: 'www',
          port: 80,
          keepalive: true,
          open: {
            target: "http://localhost"
          }
        }
      }
    },
    watch: {
      build: {
        files: ['src/**/*.js'],
        tasks: ['jshint:js', 'concat:js']
      },
      web: {
        files: ['www/**/*.*'],
        tasks: ['connect:server']
      },
      live: {
        files: ['www/**/*.*'],
        options: {
          livereload : 9090,
        }
      }
    }
  });
  
  grunt.registerTask('default', ['watch:build']);
  grunt.registerTask('web', ['watch:web']);
};