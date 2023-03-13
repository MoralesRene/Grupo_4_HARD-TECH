const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const registerController = require("../controllers/registerController.js");
const multer = require("multer");
const uploadFile = require("../middlewares/multerMiddleware.js");

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
    .bail()
    .isStrongPassword()
    .withMessage("La contraseña debe contener XXX"),
];

router.get("/", registerController.index);
router.post("/",uploadFile.single("avatar"),validations, registerController.envio);

module.exports = router;
