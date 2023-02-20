const path = require('path')

let productsController = {
    index: function (req, res) {
        switch (req.params.element) {
            case 'detail':
                res.render("product-detail")
                break;
            case 'list':
                res.render("product-list")
                break;
            case 'cart':
                res.render("product-cart")
                break;
        }
    }
}
module.exports = productsController;