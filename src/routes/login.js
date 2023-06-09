const express = require('express')
const router = express.Router()
const loginController = require('../controllers/loginController.js')
const guestMiddleware = require('../middlewares/guestMiddleware')


router.get('/', guestMiddleware, loginController.index)
router.post('/', loginController.loginProcess)

module.exports = router