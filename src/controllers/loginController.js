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
    try {
      let userToLogin = await db.Users.findOne({ where: { email: req.body.email } });

      if (!userToLogin) {
        res.render("login", {
          errors: {
            email: {
              msg: "El email o la contraseña no coinciden",
            }
          },
        });
      } else {
        let correctPassword = bcryptjs.compareSync(
          req.body.password,
          userToLogin.password
        );
        if (correctPassword !=true) {
          res.render("login", {
            errors: {
              email: {
                msg: "El email o la contraseña no coinciden",
              }
            },
          });
        }else{
          userToLogin.password;
          req.session.userLogged = userToLogin;
          return res.redirect("/profile");
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/");
  },
};

module.exports = loginController;
