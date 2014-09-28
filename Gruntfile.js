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

        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
};
