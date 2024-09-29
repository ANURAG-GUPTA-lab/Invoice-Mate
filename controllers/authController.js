// controllers/authController.js
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Update the path as needed

exports.googleLogin = passport.authenticate('google', {
    scope: ['profile', 'email']
});

exports.googleCallback = (req, res) => {
    const user = req.user;
    const accessToken = jwt.sign({ id: user.id }, process.env.SESSION_SECRET, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ id: user.id }, process.env.SESSION_SECRET, { expiresIn: '7d' });
    user.accessToken = accessToken;
    user.refreshToken = refreshToken;
    res.redirect(`http://localhost:3000/oauth-callback?accessToken=${accessToken}&refreshToken=${refreshToken}`);
};
