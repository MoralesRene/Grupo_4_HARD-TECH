const path = require("path")
const User = require('../models/User');
const bcryptjs = require('bcryptjs');



let loginController = {
    index: (req, res) => {
        res.render("login")
    },

    loginProcess: (req, res) => {
        let userToLogin = User.findByField('email', req.body.email);

        if (userToLogin) {
            let correctPassword = bcryptjs.compareSync(req.body.password, userToLogin.contrasenia);
            if (correctPassword) {
                res.send('hola')
            }
        };

        res.render('login', {
            errors: {
                email: {
                    msg: 'El mail o la contraseña son incorrectas'
                }
            }
        })
        
    } 

}

module.exports = loginController