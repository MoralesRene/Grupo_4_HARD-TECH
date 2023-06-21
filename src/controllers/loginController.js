const path = require("path");
const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const session = require("express-session");
const db = require("../database/models");

let loginController = {
  index: (req, res) => {
    res.render("login");
  },

  loginProcess: async (req, res) => {
    let userToLogin = await db.Users.findOne({
      where: { email: req.body.email }, include: [{model:db.Roles,as:"roles"}]
    });

    if (userToLogin) {
      let correctPassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (correctPassword) {
        userToLogin.password;
        req.session.userLogged = userToLogin;
        req.body.recordar == "on" && res.cookie('recordar', userToLogin) 
        return res.redirect("/profile");
      }
    } else {
      res.render("login", {
        errors: {
          email: {
            msg: "El email o la contraseña no coinciden",
          },
        }
      });
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/");
  },
};

module.exports = loginController;
