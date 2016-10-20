/*!
 * Inkfish Grunt file
 * http://ink.fish
 * @author Xristopher Anderton
 */

'use strict';

/**
 * Grunt Module
 */
module.exports = function(grunt)
{
    /**
     * Configuration
     */
    grunt.initConfig(
    {

        /**
         * Get package meta data
         */
        pkg: grunt.file.readJSON('package.json'),

        /**
         * Set project object
         */
        project:
        {
            title: "Website",
            src: 'src',
            dev: 'dev',
            dist: 'dist',
            sass: '<%= project.src %>/sass',
            css: 'css',
            images: 'images',
            javascript: 'js',
            partials: '<%= project.src %>/partials',
            views: '<%= project.src %>/views',
            bower: 'bower_components',
        },

        /**
         * Project banner
         */
        tag:
        {
            banner: '/*!\n' +
                ' * <%= pkg.name %>\n' +
                ' * <%= pkg.title %>\n' +
                ' * <%= pkg.url %>\n' +
                ' * @author <%= pkg.author %>\n' +
                ' * @version <%= pkg.version %>\n' +
                ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
                ' */\n'
        },

        /**
         * Sass
         */
        sass:
        {
            dev:
            {
                options:
                {
                    style: 'expanded',
                    compass: true
                },
                files:
                {
                    '<%= project.dev %>/<%= project.css %>/style.css': '<%= project.sass %>/style.scss'
                }
            },
            dist:
            {
                options:
                {
                    style: 'compressed',
                    compass: true
                },
                files:
                {
                    '<%= project.dist %>/<%= project.css %>/style.css': '<%= project.sass %>/style.scss'
                }
            }
        },

        /**
         * HTML Build
         */
        htmlbuild:
        {
            dev:
            {
                src: '<%= project.views %>/index.html',
                dest: '<%= project.dev %>',
                options:
                {
                    beautify: true,
                    relative: true,
                    basePath: false,
                    scripts:
                    {
                        critical: '<%= project.src %>/<%= project.javascript %>/critical.min.js',
                    },
                    sections:
                    {
                        views: '<%= project.partials %>/{,*/}_*.html',
                        partial:
                        {
                            elementTest: '<%= project.partials %>/element-test.html',
                        },
                        templates: '<%= project.views %>/**/*.html',
                        layout:
                        {
                            cover: '<%= project.partials %>/cover.html',
                            navbar: '<%= project.partials %>/header.html',
                            footer: '<%= project.partials %>/footer.html',
                            preload: '<%= project.partials %>/preload.html',
                        }
                    },
                    data:
                    {},
                }
            },
            dist:
            {
                src: '<%= project.views %>/index.html',
                dest: '<%= project.dist %>',
                options:
                {
                    beautify: false,
                    relative: true,
                    basePath: false,
                    scripts:
                    {
                        critical: '<%= project.src %>/<%= project.javascript %>/critical.min.js',
                    },
                    sections:
                    {
                        views: '<%= project.partials %>/{,*/}_*.html',
                        partial:
                        {
                            elementTest: '<%= project.partials %>/element-test.html',
                        },
                        templates: '<%= project.views %>/**/*.html',
                        layout:
                        {
                            cover: '<%= project.partials %>/cover.html',
                            navbar: '<%= project.partials %>/header.html',
                            footer: '<%= project.partials %>/footer.html',
                            preload: '<%= project.partials %>/preload.html',
                        }
                    },
                    data:
                    {},
                }
            },
        },



        /**
         * Wiredep
         */
        wiredep:
        {
            task:
            {
                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
                    '<%= project.views %>/**/*.html', // .html support...
                    '<%= project.sass %>/style.scss' // .scss & .sass support...
                ],

                fileTypes:
                {
                    html:
                    {
                        replace:
                        {
                            js: '<script defer src="{{filePath}}"></script>',
                            // css: '<link rel="preload" href="{{filePath}}" as="style" onload="this.rel=\'stylesheet\'"><noscript><link rel="stylesheet" href="path/to/mystylesheet.css"></noscript>',
                        }
                    },
                },

                options:
                {
                    // See wiredep's configuration documentation for the options
                    // you may pass:

                    // https://github.com/taptapship/wiredep#configuration
                    // cwd: '/js/',
                    ignorePath: /\.\.\/\.\.\//,
                }
            }
        },

        /**
         * Copy
         */
        copy:
        {
            dev:
            {
                expand: true,
                cwd: '<%= project.src %>/<%= project.images %>',
                src: '**',
                dest: '<%= project.dev %>/<%= project.images %>',
                flatten: false,
                filter: 'isFile',
            },
            dist:
            {
                expand: true,
                cwd: '<%= project.src %>/<%= project.images %>',
                src: '**',
                dest: '<%= project.dist %>/<%= project.images %>',
                flatten: false,
                filter: 'isFile',
            },
            controllersDev:
            {
                expand: true,
                cwd: '<%= project.src %>/controllers',
                src: '**',
                dest: '<%= project.dev %>',
                flatten: true,
                filter: 'isFile',
            },
            controllersDist:
            {
                expand: true,
                cwd: '<%= project.src %>/controllers',
                src: '**',
                dest: '<%= project.dist %>',
                flatten: true,
                filter: 'isFile',
            },
        },

        /**
         * uglify
         */
        uglify:
        {
            dev:
            {
                options:
                {
                    beautify: true,
                    sourceMap: true,
                    mangle: false,
                    sourceMapName: '<%= project.dev %>/<%= project.javascript %>/app.map',
                },
                files:
                {
                    '<%= project.dev %>/<%= project.javascript %>/app.js': [
                        '<%= project.bower %>/is-loading/jquery.isloading.js',
                        '<%= project.bower %>/jquery-validation/dist/jquery.validate.min.js',
                        '<%= project.src %>/<%= project.javascript %>/main.js'
                    ],
                }
            },
            dist:
            {
                options:
                {
                    // mangle:
                    // {
                    //     except: ['jQuery']
                    // }
                },
                files:
                {
                    '<%= project.dist %>/<%= project.javascript %>/app.min.js': [
                        '<%= project.bower %>/is-loading/jquery.isloading.js',
                        '<%= project.bower %>/jquery-validation/dist/jquery.validate.min.js',
                        '<%= project.src %>/<%= project.javascript %>/main.js'
                    ],
                }
            },
            critical:
            {
                options:
                {
                    // mangle:
                    // {
                    //     except: ['jQuery']
                    // }
                },
                files:
                {
                    '<%= project.src %>/<%= project.javascript %>/critical.min.js': [
                        '<%= project.bower %>/jquery/dist/jquery.min.js',
                        '<%= project.bower %>/jquery-lazy/jquery.lazy.min.js',
                        '<%= project.src %>/<%= project.javascript %>/lazyload.js',
                    ],
                }
            }
        },

        /**
         * cssmin
         */
        cssmin:
        {
            options:
            {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            dist:
            {
                files:
                {
                    '<%= project.dist %>/<%= project.css %>/style.min.css': [
                        '<%= project.bower %>/chocolat/dist/css/chocolat.css',
                        '<%= project.dist %>/<%= project.css %>/style.css',
                    ],
                }
            }
        },


        /**
         * Watch
         */
        watch:
        {
            sass:
            {
                files: '<%= project.sass %>/{,*/}*.{scss,sass}',
                tasks: ['sass:dev']
            },

            htmlbuild:
            {
                files: ['<%= project.views %>/{,*/}*.{htm,html}', '<%= project.partials %>/{,*/}*.{htm,html}'],
                tasks: ['htmlbuild:dev']
            },

            wiredep:
            {
                files: ['bower_components/*'],
                tasks: ['wiredep']
            },

            copy:
            {
                files: ['<%= project.src %>/<%= project.images %>/{,*/}*'],
                tasks: ['copy:dev']
            },

            uglify:
            {
                files: ['<%= project.src %>/<%= project.javascript %>/{,*/}*.js'],
                tasks: ['uglify:dev']
            },

        },

    });

    /**
     * Default task
     * Run `grunt` on the command line
     */
    grunt.registerTask('default', [
        'dev',
        'watch',
    ]);
    grunt.registerTask('dev', [
        'sass:dev',
        'wiredep',
        'uglify:critical',
        'htmlbuild:dev',
        'copy:dev',
        'uglify:dev',
        'copy:controllersDev',
    ]);
    grunt.registerTask('dist', [
        'sass:dist',
        'wiredep',
        'uglify:critical',
        'cssmin:dist',
        'htmlbuild:dist',
        'copy:dist',
        'uglify:dist',
        'copy:controllersDist',
    ]);
    /**
     * Load Grunt plugins
     */
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};
