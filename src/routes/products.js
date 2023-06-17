const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const productsController = require("../controllers/productsController");
const upload = require("../middlewares/multerMiddlewareProduct");
const Products = require("../database/models/Products");
const path = require("path")
const validationsproducts = [
body("name")
.notEmpty().withMessage("Debes completar el nombre")
.bail()
.isLength({min:5}).withMessage("El nombre debe contener como mínimo 5 caracteres"),
body("descripcion")
.notEmpty().withMessage("El campo no debe estar vacío")
.bail()
.isLength({min:20}).withMessage("El campo debe contener 20 caracteres como mínimo"),
body("imagen-producto")
.custom((value, {req}) =>{
    let file= req.files;
    let acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];
    if (!file){
        throw new Error ("Tienes que subir una imagen");
    } else{
        file.forEach(imagen => {
            let fileExtension = path.extname(imagen.originalname);     
            if(!acceptedExtensions.includes(fileExtension)){
            throw new Error (`Las extensiones de archivo permitidas son ${acceptedExtensions.join(",")}`);
            }
        });
    } return true;
}),
body("categoria")
.notEmpty().withMessage("El campo no debe estar vacío"),
body("marca")
.notEmpty().withMessage("El campo no debe estar vacío"),
body("model")
.notEmpty().withMessage("El campo no debe estar vacío"),
body("status")
.notEmpty().withMessage("El campo no debe estar vacío"),
body("families")
.notEmpty().withMessage("El campo no debe estar vacío"),
body("warranty")
.notEmpty().withMessage("El campo no debe estar vacío"),
body("price")
.notEmpty().withMessage("El campo no debe estar vacío")
];

router.get("/:element/", productsController.index);
router.post("/create",upload.array("imagen-producto"), productsController.create);
router.get("/list/:category/", productsController.mostrarPorCat);
router.get("/detail/:id", productsController.detalleID);
router.get("/edit/:id", productsController.editarProductoForm);
router.put("/edit/:id",upload.array("imagen-producto"), validationsproducts, productsController.editarProducto);
router.delete("/:id", productsController.eliminarProducto);

module.exports = router;
