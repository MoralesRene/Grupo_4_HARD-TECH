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
                case 'create':
                res.render("crear-producto")
                break;
        };
    },
    createProduct: (req, res) => {
        const images = req.files?.map(element => element.filename)
        const image = [];
        images.forEach(img => { image.push(img) });

        const products = getProducts();
        const newProduct = {
            id: products[products.length - 1].id + 1,
            name: req.body.name,
            shortName: req.body.shortname,
            description: req.body.description,
            category: req.body.category,
            trademark: req.body.trademark,
            model: req.body.model,
            warranty: req.body.warranty,
            price: parseInt(req.body.price),
            image: image

        };
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "))
        res.redirect("/product/list");
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
        let imagenes = req.files.length !=0 ? req.files.map((element) => element.filename) : products[productIndex].image
        products[productIndex] = {
            ...products[productIndex],
            name: req.body.name,
            description: req.body.descripcion,
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
