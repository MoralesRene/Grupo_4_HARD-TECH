const express = require('express')
const router = express.Router()
const ayudaController = require('../controllers/ayudaController.js')

router.get('/', ayudaController.servicioTecnico)


module.exports = router



