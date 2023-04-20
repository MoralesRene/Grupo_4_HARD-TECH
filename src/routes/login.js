const express = require('express')
const router = express.Router()
const loginController = require('../controllers/loginController.js')

router.get('/', loginController.index)

router.post('/', loginController.loginProcess)


module.exports = router