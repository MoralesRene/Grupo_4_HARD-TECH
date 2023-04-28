const express = require("express")
const router = express.Router()
const userController = require("../controllers/usersController")
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')
const loginController = require("../controllers/loginController")


router.get("/profile", authMiddleware, userController.index)

router.get("/logout/", loginController.logout)


module.exports = router