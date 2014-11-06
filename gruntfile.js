module.exports = function (grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
 
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['sass/*.scss', 'sass/**/*.scss'],
                    dest: './css/dist/',
                    ext: '.css'
                }]
            }
        },
        watch: {
            sass : {
                files: ['css/sass/**/*.scss', 'css/sass/*.scss', 'scripts/*.js', 'scripts/**/*.js'],
                tasks: ['sass:dist']
            }
        }
    });
 
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass:dist', 'karma', 'watch']);
    grunt.registerTask('test', ['karma']);
};