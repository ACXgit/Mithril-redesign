'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      dist: {
        files: {
          'assets/css/docs.min.css': [
            'src/less/docs.less'
          ]
        },
        options: {
          compress: true,
          sourceMap: false
        }
      }
    },
    watch: {
      less: {
        files: [
          'src/less/*.less'
        ],
        tasks: ['less']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: true
        },
        files: [
          'assets/css/docs.min.css',
          'src/js/*.js',
          'src/less/*.less',
          '*.html'
        ]
      }
    },
    clean: {
      dist: [
        'assets/css/docs.min.css'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'less'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
