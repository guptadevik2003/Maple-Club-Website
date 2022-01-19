const userAuthenticator = require('../otherFunctions/userAuthenticator')

module.exports = ({ app, express }) => {
    express.useRoutes = async () => {

        // Import Routes
        const dashboardRoute = require(`../routes/dashboardRoute`)
        const apiRoute = require(`../routes/apiRoute`)
        const rootRoute = require(`../routes/rootRoute`)

        // Using Routes
        app.use('/dashboard', userAuthenticator.isAuth, dashboardRoute) // SECURED
        app.use('/api', apiRoute)
        app.use('/', rootRoute)

    }
}
