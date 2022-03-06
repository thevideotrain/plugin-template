module.exports = function PluginServerSideRenderer (app, dir, config) {
    /*
     *
     * app is the express app
     * dir is the current-working-directory of the server or mostly the root of TheVideoTrain
     * config is the config.json file as a javascript object
     * 
     */

    app.get('/__plugin-template__', (req, res) => {
        // Uncomment if user must be logged in to access this page
        // if (req.session.loggedin !== true) return res.redirect('/login') // Login Check
        res.send('Hello World from the Plugin-Template!')
    })
}