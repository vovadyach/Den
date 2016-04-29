/**
 * Created by vinside on 4/28/16.
 */
module.exports = function(grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        //pkg: grunt.file.readJSON('package.json'),
        jslint: {
            client: {
                src: [
                    'src/javascripts/**/*.js'
                ],
                derectives: {
                    // node environment
                    node: false,
                    // browser environment
                    browser: true,
                    // allow dangling underscores
                    nomen: true,
                    // allow todo statements
                    todo: true,
                    // allow unused parameters
                    unparam: true,
                    // add predefined libraries
                    predef: [
                        'jQuery'
                    ]
                }
            }
        },

        clean: ['build/*'],

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'build/stylesheets/style.css' : 'src/sass/style.scss'
                }
            }
        },

        includereplacemore: {
            dev: {
                options: {
                    includesDir: 'src/html'
                },
                expand: true,
                cwd: 'src/html',
                src: '*.html',
                dest: 'build/'
            }
        },

        copy: {
            files: {
                expand: true,
                cwd: 'src',
                src: [
                    'fonts/**/*',
                    'images/**/*',
                    'javascripts/**/*',
                    'vendor/jquery/dist/jquery.min.js'
                ],
                dest: 'build/',
                filter: 'isFile'
            }
        },

        watch: {
            configFiles: {
                files: ['src/fonts/**/*', 'src/html/**/*', 'src/images/**/*', 'src/javascripts/**/*', 'src/sass/**/*' ],
                tasks: ['copy', 'sass', 'includereplacemore'],
                options: {
                    livereload: true
                }
            }
        },

        express: {
            all: {
                options: {
                    hostname: 'localhost',
                    port: 8000,
                    bases: 'build'
                }
            }
        },

        open: {
            dev: {
                path: 'http://localhost:8000',
                app: '/usr/bin/google-chrome'
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['sass']);
    //Current project tasks
    grunt.registerTask('start', ['clean', 'copy', 'sass', 'includereplacemore',
        'express', 'jslint', 'jslint', 'open', 'watch']);
};