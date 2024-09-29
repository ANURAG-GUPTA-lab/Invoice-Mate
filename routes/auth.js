// routes/auth.js
const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    // Send tokens to frontend
    res.redirect(`http://localhost:3000/oauth-callback?token=${req.user.accessToken}&refreshToken=${req.user.refreshToken}`);
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
