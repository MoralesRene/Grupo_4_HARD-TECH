const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const destinationPath = path.join(__dirname, '../public')
    cb(null, destinationPath);
  },
  filename: (req, file, cb) => {
    const nombreArchivo = `/img/${Date.now()}_img${path.extname(file.originalname)}`;
    cb(null, nombreArchivo);
  },
}); 

const upload = multer({ storage });

router.get("/:element/", productsController.index);
router.get("/list/:category/", productsController.mostrarPorCat);
router.get("/detail/:id", productsController.detalleID);
router.get("/edit/:id", productsController.editarProductoForm);
router.post("/list", upload.any("imagen-producto"), productsController.createProduct);
router.put("/:id", upload.any('imagen-producto'), productsController.editarProducto);
router.delete("/:id", productsController.eliminarProducto);

module.exports = router;