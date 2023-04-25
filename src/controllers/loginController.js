const path = require("path")
const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const session = require('express-session');
const { log } = require("console");



let loginController = {
    index: (req, res) => {
        res.render("login")
    },

    loginProcess: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);

        if (userToLogin) {
            let correctPassword = bcryptjs.compareSync(req.body.password, userToLogin.contrasenia);
            if (correctPassword) {
                delete userToLogin.contrasenia;
                req.session.userLogged = userToLogin;
                return res.redirect('/profile')
            }
        };

        res.render('login', {
            errors: {
                email: {
                    msg: 'El mail o la contraseña son incorrectas'
                }
            }
        })

    },

    profile: (req, res) => {
        return res.render('profile', {
            user: req.session.userLogged
        })
    },

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('login')
    }

}

module.exports = loginController