const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')

router.get('/:element/', productsController.index)

module.exports = router