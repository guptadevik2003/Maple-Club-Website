const express = require('express')
const router = express.Router()

// Custom Modules
const userAuthenticator = require('../otherFunctions/userAuthenticator')

// /arc-sw.js
router.get('/arc-sw.js', async (req, res) => {
    res.sendFile(`${process.cwd()}/views/arc-sw.js`)
})

// /terms-of-service
router.get('/terms-of-service', async (req, res) => {
    res.render('terms-of-service.ejs')
})
router.get('/tos', async (req, res) => {
    res.redirect('/terms-of-service')
})
router.get('/terms', async (req, res) => {
    res.redirect('/terms-of-service')
})

// /privacy-policy
router.get('/privacy-policy', async (req, res) => {
    res.render('privacy-policy.ejs')
})
router.get('/privacy', async (req, res) => {
    res.redirect('/privacy-policy')
})

// /invite
router.get('/invite', async (req, res) => {
    res.redirect(`https://discord.com/api/oauth2/authorize?client_id=855017456284467210&permissions=140123696241&scope=bot%20applications.commands`)
})

// /supportserver
router.get('/supportserver', async (req, res) => {
    res.redirect(`https://discord.gg/TZuTr9dmSV`)
})
router.get('/support-server', async (req, res) => {
    res.redirect(`/supportserver`)
})

// /
router.get('/', async (req, res) => {
    res.render('home.ejs')
})
router.get('/home', async (req, res) => {
    res.redirect('/')
})
router.get('/index', async (req, res) => {
    res.redirect('/')
})

// /login
router.get('/login', userAuthenticator.isNotAuth, async (req, res) => {
    const scopes = `identify email guilds`
    const client_id = `855017456284467210`
    let redirectURI
    if (process.env.BUILD_MODE === 'development') {
        redirectURI = `http://localhost:${process.env.PORT}/api/discord-redirect` }
    if (process.env.BUILD_MODE === 'production') {
        redirectURI = 'https://mapleclub.top/api/discord-redirect' }
    let authURL = `https://discord.com/api/oauth2/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirectURI}&state=MapleClubTopWebsite&scope=${scopes}&show_dialog=false`
    res.redirect(authURL)
})

// /logout POST SECURED
router.post('/logout', userAuthenticator.isAuth, async (req, res) => {
    req.session.destroy()
    return res.redirect('/')
})

module.exports = router
