module.exports = {

        options: {
            spawn: false,
            livereload: true
        },

        scripts: {
            files: [
                'src/scripts/*.js'
            ],
            tasks: [
                /*'jshint',
                'uglify'*/
            ]
        },

        styles: {
            files: [
                'src/styles/*.scss',
                'src/styles/*.css'
            ],
            tasks: [
                /*'sass:dev'*/
            ]
        },

        html: {
            files: [
                'src/**/*.html'
            ],
            tasks: [
                'htmlmin:dist'
            ]
        },






};