const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')

router.get('/:element/', productsController.index)
router.get("/list/:category/", productsController.mostrarPorCat)
router.get("/detail/:id", productsController.detalleID)
router.get('/edit/:id' , productsController.editarProductoForm)
router.put('/:id', productsController.editarProducto)

module.exports = router