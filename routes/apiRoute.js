const express = require('express')
const router = express.Router()

// Custom Modules
const userAuthenticator = require('../otherFunctions/userAuthenticator')
const discordAPIFetch = require('../otherFunctions/discordAPIFetch')

// /api
router.get('/', async (req, res) => {
    res.status(200).json({ success: true, message: 'API Route Working!', timestamp: Date.now() })
})

// /api/discord-redirect
router.get('/discord-redirect', userAuthenticator.isNotAuth, async (req, res) => {
    if (!req.url.includes('access_token')) return res.render('api-discord-redirect.ejs')
    const { token_type, access_token, expires_in, scope, state } = req.query
    if (!access_token) return res.redirect('/login')
    const userInfo = await discordAPIFetch.fetchMe(access_token)
    if (!userInfo.id) return res.redirect('/login')
    req.session.isAuth = true
    req.session.access_token = access_token
    req.session.user = userInfo
    const developers = ['741522321344430171']
    if (developers.includes(userInfo.id)) {
        req.session.isDev = true
    }
    return res.redirect('/dashboard')
})

module.exports = router
