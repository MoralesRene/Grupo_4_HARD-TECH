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
    },
    editarProductoForm: (req, res) => {
        const products = getProducts();
        const product = products.find(element => element.id == req.params.id)
        res.render('edicion-producto', { product })
    },
    editarProducto: (req, res) => {
        const products = getProducts();
        const productIndex = products.findIndex(element => element.id == req.params.id)
        let imagenes = req.files ? req.files.map((element) => element.filename) : products[productIndex].image
        products[productIndex] = {
            ...products[productIndex],
            name: req.body.name,
            description: req.body.description,
            category: req.body.categoria,
            trademark: req.body.marca,
            price: req.body.price,
            model: req.body.model,
            image: imagenes
        }
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2))
        res.redirect('/')
    },
    eliminarProducto: (req, res) => {
        const products = getProducts();
        const productsFiltered = products.filter(element => element.id != req.params.id)
        fs.writeFileSync(productsFilePath, JSON.stringify(productsFiltered, null, 2))
        res.redirect('/')
    }
}
module.exports = productsController;
