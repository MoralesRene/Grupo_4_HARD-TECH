const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get("/:element/", productsController.index);
router.get("/list/:category/",productsController.mostrarPorCat);
router.get("/detail/:id",productsController.detalleID);

router.post("/create", productsController.index);

module.exports = router;