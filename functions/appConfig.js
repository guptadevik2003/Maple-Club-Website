const session = require('express-session')
const MongoDBSession = require('connect-mongodb-session')(session)
const cookieParser = require('cookie-parser')

module.exports = ({ app, express }) => {
    express.appConfig = async () => {

        const storeSession = new MongoDBSession({
            uri: process.env.MAPLE_CLUB_DISCORD_APP_MONGODB,
            collection: 'Maple-Club-Web-Sessions'
        })

        app.use(express.static(`${process.cwd()}/views`))

        app.set('view engine', 'ejs')

        app.use(express.json())

        app.use(express.urlencoded({ extended: false }))

        app.use( session({
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized: false,
            store: storeSession,
            cookie: { maxAge: 6 * 24 * 60 * 60 * 1000 }, // 6 Days cuz Discord Access_token expires in 7 Days
            name: 'Maple_Club_Session'
        }) )

        app.use(cookieParser())

    }
}
