const path = require("path");
const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const session = require("express-session");
const db = require("../database/models");
const { log } = require("console");

let loginController = {
  index: async (req, res) => {
    res.render("login");
  },

  loginProcess: async (req, res) => {
    let userToLogin = await db.Users.findOne({
      where: { email: req.body.email }, include: ['roles']
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

  profile: (req, res) => {
    return res.render("profile", {
      user: req.session.userLogged
    });
  },

  logout: (req, res) => {
    req.session.destroy();
    return res.redirect("login");
  },
};

module.exports = loginController;
