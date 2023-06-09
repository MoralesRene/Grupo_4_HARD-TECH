const { Router } = require("express");
const router = Router()
const APIUserController = require("../../controllers/api/users")

router.get('/users/:id?', APIUserController.userList)

module.exports = router