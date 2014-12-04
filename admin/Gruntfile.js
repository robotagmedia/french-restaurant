'use stirct'

module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-usemin');
	
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		connect: {
			dev: {
				options: {
					port: 3000,
					base: 'dev/'
				}
			},
			dist: {
				options: {
					port: 3000,
					base: 'dist/',
					keepalive: true
				}
			}
		},
		
		watch: {
			style: {
				files: ['**/*.less'],
				tasks: ['less:dev']
			}
		},
		
		less: {
			dev: {
				files: [{
					expand: true,
					cwd: 'dev',
					src: ['components/{,*/}*.less', 'styles/*.less'],
					dest: 'dev',
					ext: '.css'
				}]
			},
			dist: {
				options: {
					cleancss: true,
					ieCompat: true
				},
				files: [{
					expand: true,
					cwd: 'dev',
					src: ['components/{,*/}*.less', 'styles/*.less'],
					dest: 'dev',
					ext: '.css'
				}]
			}
		},
		
		clean: {
			dist: ['dist']
		},
		
		copy: {
			dist: {
				files: [
					{ expand: true, src: ['index.html', 'components/{,*/}*.html'], dest: 'dist/', cwd: 'dev' },
					{ expand: true, src: ['fonts/*'], dest: 'dist/', cwd: 'dev/bower_components/bootstrap/dist' },
					{ expand: true, src: ['fonts/*'], dest: 'dist/', cwd: 'dev/bower_components/fontawesome' }
				]
			}
		},
		
		useminPrepare: {
			html: 'dev/index.html',
			options: {
				dest: 'dist'
			}
		},
		
		usemin: {
			html: 'dist/index.html'
		},
		
		uglify: {
			lib: {
				files:[
					{ src: ['.tmp/concat/js/lib.js'], dest: 'dist/js/lib.js' }
				]
			},
			scripts: {
				options: {
					mangle: false
				},
				files:[
					{ src: ['.tmp/concat/js/scripts.js'], dest: 'dist/js/scripts.js' }
				]
			}
		}
		
	});
	
	grunt.registerTask('default', [
		'connect:dev',
		'watch:style'
	]);
	
	grunt.registerTask('server', '', function(build) {
		if (build === 'dev') {
			grunt.task.run('connect:dev', 'watch:style');
		}
		if (build === 'dist') {
			grunt.task.run('build', 'connect:dist');
		}
	});
	
	grunt.registerTask('build', [
		'less:dist',
		'clean:dist',
		'copy:dist',
		'useminPrepare',
		'concat:generated',
		'cssmin:generated',
		'uglify:lib',
		'uglify:scripts',
		'usemin'
	]);
	
};