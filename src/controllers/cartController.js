const path = require('path')

let cartController = {
    index: function (req, res) {
        switch (req.params.element) {
            case 'ship':
                res.sendFile(path.join(__dirname,"../views/cart-ship.html"))
            case 'pay':
                res.sendFile(path.join(__dirname,"../views/cart-pay.html"))
            case 'resume':
                res.sendFile(path.join(__dirname,"../views/cart-resume.html"))
        }
    }
}

module.exports = cartController;