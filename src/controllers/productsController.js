const path = require('path');
const fs = require("fs");

const productsFilePath = path.join(__dirname, "../data/listProducts.json")
function getProducts() {
    let ListJSON = fs.readFileSync(productsFilePath, "utf-8");
    let listProducts = JSON.parse(ListJSON);
    return listProducts;
}

let productsController = {
    index: function (req, res) {
        const products = getProducts();
        switch (req.params.element) {
            case 'list':
                res.render("product-list", { productos: products })
                break;
            case 'cart':
                res.render("product-cart", { productos: products })
                break;
            case 'edit':
                res.render("edicion-producto");
                break;
            case 'create':
                res.render("crear-producto");
                break;
        };
    },
    mostrarPorCat: (req, res) => {
        const products = getProducts();
        const productByCategory = products.filter(producto => producto.category == req.params.category)
        if (req.params.category) {
            res.render("product-list", { productos: productByCategory })
        }
    },
    detalleID: (req, res) => {
        const products = getProducts();
        let idProd = products.find(product => product.id == req.params.id)
        let otherProd = products.filter(product => product.category == idProd.category && product.id !== idProd.id)
        res.render("product-detail", { idProd, otherProd })
    }

}
module.exports = productsController;