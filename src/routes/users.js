const express = require("express")
const router = express.Router()
const userController= require("../controllers/usersController")
const middlewareLogged = require("../middlewares/middlewareLogged")

router.get("/profile", middlewareLogged,userController.index)
module.exports=router