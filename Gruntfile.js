module.exports = function(grunt) {
  grunt.initConfig({
    clean: ['dist'],
    cssmin: {
		combine: {
			files: {
				'dist/video-comparison.min.css': ['src/video-comparison.css']
			},
		},
	},
	uglify: {
		options: {
			mangle: false
		},
		dist: {
			files: {
				'dist/video-comparison.min.js': ['src/video-comparison.js']
			}
		}
	},
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['clean', 'cssmin', 'uglify']);
};