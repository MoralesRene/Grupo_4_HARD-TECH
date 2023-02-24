const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')

router.get('/:element/', productsController.index)
router.get("/list/:category/",productsController.mostrarPorCat)

module.exports = router