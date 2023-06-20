const { Router } = require("express")
const APIProductController = require("../../controllers/api/products")
const apiCheckoutController = require("../../controllers/api/checkout")
const router = Router()

router.get('/products/:id?', APIProductController.productList)
router.post("/checkout", apiCheckoutController.checkout)
module.exports = router