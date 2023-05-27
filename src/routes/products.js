const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const upload= require("../middlewares/multerMiddlewareProduct")


router.get("/:element/", productsController.index);
router.get("/list/:category/", productsController.mostrarPorCat);
router.get("/detail/:id", productsController.detalleID);
router.get("/edit/:id", productsController.editarProductoForm);
router.get("/create", productsController.createProduct);
router.put("/:id", upload.single('imagen-producto'), productsController.editarProducto);
router.delete("/:id", productsController.eliminarProducto);

module.exports = router;