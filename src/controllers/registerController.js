const path = require("path");
const { validationResult } = require("express-validator");
const User = require('../models/User');
const bcryptjs = require('bcryptjs');

let registerController = {
  index: (req, res) => {
    res.render("register");
  },
  envio: (req, res) => {
    const validaciones = validationResult(req);
    if (validaciones.errors.length > 0) {
      return res.render("register", {
        errors: validaciones.mapped(),
        old: req.body,
      });
    }

    let userInDB = User.findByField('email', req.body.email);

    if (userInDB) {
      return res.render('register', {
        errors: {
          email: {
            msg: 'Este email ya está registrado'
          }
        },
        oldData: req.body
      })
    }


    let userToCreate = {
      ...req.body,
      contrasenia: bcryptjs.hashSync(req.body.contrasenia.toString(), 10),
      avatar: req.file.filename
    }

    User.create(userToCreate);
    res.redirect('/login')
  },
};



module.exports = registerController;
