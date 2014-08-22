module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');

	grunt.initConfig({
		jshint: {
			files: ['app/**/*.js', 'routes.js', 'server.js', 'tests/mocha/**/*.js']
		},
		clean: {
			dev: {
				src: ['build/']
			}
		},
		mocha: {
            backbonetest: {
                src: ['tests/test.html'],
                options: {
                    run: true
                }
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
            },
            test: {
                options: {
                    transform: ['debowerify', 'hbsfy'],
                    debug: true
                },
                src: ['tests/mocha/backbone/**/*.js'],
                dest: 'tests/testBundle.js'
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
		},
		exec: {
			mocha: {
				cmd: 'mocha tests/mocha/math'
			},
			start: {
				cmd: 'node server.js'
			}
		}
	});
	grunt.registerTask('default', [
		'jshint',
		'browserify:test',
		'mocha:backbonetest',
		'clean:dev',
		'browserify:dev',
		'copy:dev',
		'exec:mocha',
		'exec:start'
	]);
};