const path = require('path')
const fs = require("fs")

let ListJSON= fs.readFileSync(__dirname+"../../data/listProducts.json","utf-8")
let listProducts = JSON.parse(ListJSON)

let productsController = {
    index: function (req, res) {
        switch (req.params.element) {
            case 'list':
                res.render("product-list",{productos:listProducts})
                break;
            case 'cart':
                res.render("product-cart",{productos:listProducts})
                break;
            case 'edit':
                res.render("edicion-producto")
        };
    },
    mostrarPorCat: (req,res)=>{
        if (req.params.category) {
            res.render("product-list",{productos:listProducts.filter(producto=>{
                return producto.category==req.params.category;
            })})
        }
    },
    detalleID:(req,res)=>{
       let idProd=listProducts.find(product=>{
            return product.id==req.params.id;
        })
        let otherProd= listProducts.filter(product=>{
            return product.category==idProd.category && product.id !==idProd.id;
        })
            res.render("product-detail",{idProd,otherProd}) 
    }

}
module.exports = productsController;