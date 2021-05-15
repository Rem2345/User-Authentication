const User = require('../models/user');

module.exports.RenderRegiser= (req, res) => {
    res.render('users/register');
}

module.exports.Register= async (req, res, next) => {
    try {
        const { email, username, dateOfBirth, address, password } = req.body;
        const user = new User({ email, username, dateOfBirth, address });
        const registeredUser = await User.register(user, password);
        res.render('start');
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
}

module.exports.renderLogin= (req, res) => {
    res.render('users/login');
}

module.exports.login= (req, res) => {
    req.flash('success', 'welcome back!');
    res.redirect('loggedin');
}

module.exports.logout= (req, res) => {
    req.logout();
    req.flash('success', "Goodbye!");
    res.redirect('login');
}