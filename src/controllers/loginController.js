const path = require("path");
const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const session = require("express-session");
const db = require("../database/models");

let loginController = {
  index: async (req, res) => {
    res.render("login");
  },

  loginProcess: (req, res) => {
    let userToLogin = db.User.findOne("email", req.body.email);

    if (userToLogin) {
      let correctPassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (correctPassword) {
        userToLogin.password;
        req.session.userLogged = userToLogin;
        return res.redirect("/profile");
      }
    } else {
      res.render("login", {
        errors: {
          email: {
            msg: "El email no esta registrado",
          },
          password: {
            msg: "La contraseña no coincide",
          },
        },
      });
    }
  },

  profile: (req, res) => {
    return res.render("profile", {
      user: req.session.userLogged,
    });
  },

  logout: (req, res) => {
    req.session.destroy();
    return res.redirect("login");
  },
};

module.exports = loginController;
