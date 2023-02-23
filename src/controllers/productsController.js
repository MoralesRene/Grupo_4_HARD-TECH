const path = require('path')
const fs = require("fs")

let ListJSON= fs.readFileSync(__dirname+"../../data/listProducts.json","utf-8")
let listProducts = JSON.parse(ListJSON)

let productsController = {
    index: function (req, res) {
        switch (req.params.element) {
            case 'detail':
                res.render("product-detail",{productos:listProducts})
                break;
            case 'list':
                res.render("product-list",{productos:listProducts})
                break;
            case 'cart':
                res.render("product-cart",{productos:listProducts})
                break;
        };
    },
    mostrarPorCat: (req,res)=>{
        if (req.params.category) {
            res.render("product-list",{productos:listProducts.filter(producto=>{
                return producto.categoria==req.params.category;
            })})
        }
    }
}
module.exports = productsController;