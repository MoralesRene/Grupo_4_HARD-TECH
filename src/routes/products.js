const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const upload = require("../middlewares/multerMiddlewareProduct");
const Products = require("../database/models/Products");

router.get("/:element/", productsController.index);
//router.post("/create",upload.array("imagen-producto"), productsController.create);
router.get("/list/:category/", productsController.mostrarPorCat);
router.get("/detail/:id", productsController.detalleID);
router.get("/edit/:id", productsController.editarProductoForm);
router.put("/:id",upload.array("imagen-producto"),productsController.editarProducto);
router.delete("/:id", productsController.eliminarProducto);

module.exports = router;
