const path = require('path')

let productsController = {
    index: function (req, res) {
        switch (req.params.element) {
            case 'detail':
                res.sendFile(path.join(__dirname,"../views/product-detail.html"))
                break;
            case 'list':
                res.sendFile(path.join(__dirname,"../views/product-list.html"))
                break;
            case 'cart':
                res.sendFile(path.join(__dirname,"../views/product-cart.html"))
                break;
        }
    }
}

module.exports = productsController