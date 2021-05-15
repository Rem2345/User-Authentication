const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const usercont= require('../controllers/users');

router.route('/register')
    .get(usercont.RenderRegiser)
    .post( catchAsync(usercont.Register));

router.route('/login')
    .get( usercont.renderLogin)
    .post( passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), usercont.login)

router.get('/logout', usercont.logout)

module.exports = router;