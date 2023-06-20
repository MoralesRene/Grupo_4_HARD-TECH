const express = require('express')
const router = express.Router()
const comunicarmeController = require('../controllers/comunicarmeController.js')

router.get('/', comunicarmeController.quieroComunicarme)


module.exports = router

