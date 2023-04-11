const path = require("path");

let loginController = {
  index: (req, res) => {
    res.render("login");
  },
  envio: (req, res) => {
    req.session.logged = req.body.email
    res.redirect('/')
  },
};

module.exports = loginController;
