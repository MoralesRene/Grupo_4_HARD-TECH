const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const registerController = require("../controllers/registerController.js");
const multer = require("multer");
const uploadFile = require("../middlewares/multerMiddlewareUser.js");
const guestMiddleware = require('../middlewares/guestMiddleware')


const validations = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre y apellido no puede ir vacío"),
  body("email")
    .notEmpty()
    .withMessage("El email no puede ir vacío")
    .bail()
    .isEmail()
    .withMessage("El email debe ser de un correo válido"),
  body("telefono").notEmpty().withMessage("El telefono no puede ir vacío"),
  body("documento").notEmpty().withMessage("El documento no puede ir vacío"),
  body("contrasenia")
    .notEmpty()
    .withMessage("La contraseña no puede ir vacía")
    .bail(),
];

router.get("/", guestMiddleware, registerController.index);
router.post("/", uploadFile.single("avatar"), validations, registerController.create);

module.exports = router;
