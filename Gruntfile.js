module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: ['opengcr.scss'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            },
        },
        connect: {
            server: {
                options: {
                    port: 8888,
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');
};
