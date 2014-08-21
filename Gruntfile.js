module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.initConfig({
		jshint: {
			files: ['app/**/*.js', 'routes.js', 'server.js']
		},
		clean: {
			dev: {
				src: ['build/']
			}
		},
		browserify: {
			dev: {
                options: {
                    transform: ['debowerify', 'hbsfy'],
                    debug: true
                },
                src: ['app/**/*.js'],
                dest: 'build/bundle.js'
            }
		},
		copy: {
			dev: {
				expand: true,
				cwd: 'app/',
				src: ['*.html', '*.css'],
				dest: 'build/',
				filter: 'isFile'
			}
		}
	});
	grunt.registerTask('default', [
		'jshint',
		'clean:dev',
		'browserify:dev',
		'copy:dev'
		]);
};