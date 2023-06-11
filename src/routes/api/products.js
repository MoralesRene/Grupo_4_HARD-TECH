const { Router } = require("express")
const APIProductController = require("../../controllers/api/products")
const router = Router()

router.get('/products/:id?', APIProductController.productList)

module.exports = router