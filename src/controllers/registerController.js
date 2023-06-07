const path = require("path");
const { validationResult } = require("express-validator");
const db = require("../database/models")
const bcryptjs = require('bcryptjs');
const { Association } = require("sequelize");

let registerController = {
  index: (req, res) => {
    res.render("register");
  },
  create: async (req, res) => {
    try {
      const validaciones = validationResult(req);
      if (validaciones.errors.length > 0) {
        return res.render("register", {
          errors: validaciones.mapped(),
          old: req.body,
        });
      }
      const validEmail = await db.Users.findOne({
        where:{
          email: req.body.email
        }
      })
      if (validEmail !=null) {
        return res.render('register', {
          errors: {
            email: {
              msg: 'Este email ya está registrado'
            }
          },
          oldData: req.body
        })
      }else{
        const userToCreate = await db.Users.create({
          name:req.body.nombre,
          email:req.body.email,
          phone:req.body.telefono,
          dni:req.body.documento,
          birthday:req.body.nacimiento,
          password: bcryptjs.hashSync(req.body.contrasenia[0], 10),
          confirmPassword: bcryptjs.hashSync(req.body.contrasenia2[0], 10),
          avatar: req.file ? req.file.filename : "default.jpg",
          roles_id: 2
        })
      }
    res.redirect('/login')
  
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = registerController;
