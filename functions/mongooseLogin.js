const mongoose = require('mongoose')

module.exports = ({ app, express }) => {
    express.mongooseLogin = async () => {

        mongoose.Promise = global.Promise
        mongoose.connect(process.env.MAPLE_CLUB_DISCORD_APP_MONGODB)

        mongoose.connection.on('connected', async () => {
            console.log(`Connected to Maple Club Discord App Database.`)
        })

        mongoose.connection.on('disconnected', async () => {
            console.log(`Disconnected from Maple Club Discord App Database.`)
        })

        mongoose.connection.on('err', async (error) => {
            console.log(error)
        })

    }
}
