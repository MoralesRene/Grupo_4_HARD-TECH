const path = require("path");
const { validationResult } = require("express-validator");

let registerController = {
  index: (req, res) => {
    res.render("register");
  },
  envio: (req, res) => {
    const validaciones = validationResult(req);
    console.log(validaciones.mapped());
    if (validaciones.errors.length > 0) {
      return res.render("register", {
        errors: validaciones.mapped(),
        old: req.body,
      });
    }
    res.redirect('/')
  },
};

module.exports = registerController;
