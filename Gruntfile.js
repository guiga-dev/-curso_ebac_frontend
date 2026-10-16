module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            production: {
                options: { compress: true },
                files: { 'dist/styles.css': 'less/main.less' }
            }
        },
        uglify: {
            production: {
                files: { 'dist/main.min.js': ['src/main.js'] }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['less', 'uglify']);
};
