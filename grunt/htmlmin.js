module.exports = {

    dist: { // Target 
        options: { // Target options 
            removeComments: true,
            collapseWhitespace: true
        },
        files: { // Dictionary of files 
            'dist/index.html': 'src/index.html', // 'destination': 'source' 
           // 'dist/contact.html': 'src/contact.html'
        }
    },
    dev: { // Another target 
        //options: { // Target options 
           // removeComments: true,
           // collapseWhitespace: true
        //},
        files: {
            'dist/index.html': 'src/index.html',
           // 'dist/contact.html': 'src/contact.html'
        }
    }






};
