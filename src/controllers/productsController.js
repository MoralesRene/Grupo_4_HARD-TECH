const path = require("path");
const fs = require("fs");
const db = require("../database/models");
const { log } = require("console");

// const productsFilePath = path.join(__dirname, "../data/listProducts.json");

// function getProducts() {
//     let ListJSON = fs.readFileSync(productsFilePath, "utf-8");
//     let listProducts = JSON.parse(ListJSON);
//     return listProducts;
// }

let productsController = {
  index: async function (req, res) {
    try {
      const products = await db.Products.findAll();
      const images = await db.Product_Images.findAll({
        where:{
          is_primary: true
        }
      })
      const categories = await db.Product_Categories.findAll()
      const trademarks = await db.Trademarks.findAll()
      switch (req.params.element) {
        case "list":
          res.render("product-list", { productos: products,  images,trademarks });
          break;
        case "cart":
          res.render("product-cart", { productos: products });
          break;
        case "create":
          res.render("crear-producto", { categories, trademarks });
          break;
      }
    } catch (error) {
      console.log(error);
    }
  },
  create: async (req, res) => {
    try {
      const category = await db.Product_Categories.findOne({
        where: {
          name: req.body.categoria
        }
      })
      const trademark = await db.Trademarks.findOne({
        where: {
          name: req.body.marca
        }
      })
      const family = await db.Families.findOne({
        where: {
          name: req.body.family
        }
      })
      const warranty = await db.Warranties.findOne({
        where: {
          name: req.body.warranty
        }
      })
      //sin resolver
      // const state = await db.Status.findAll()
      // console.log(state);
      const productoCreado = await db.Products.create({
        //Not null
        name: req.body.name,
        description: req.body.descripcion,
        model: req.body.model,
        price: req.body.price,
        //Null
        product_categories_id: category.id,
        trademarks_id: trademark.id,
        families_id: family.id,
        warranties_id: warranty.id
        //sin resolver
        // status_id:state.id,
      });
      //solucionar multer, aplicar bulkCreate, recibir info dentro un de un array, pasar array dentro del bulkCreate
      const arrayImg= req.files;
      //Refactor necesario
      const imagenProduct = await db.Product_Images.bulkCreate([
        {
          url: arrayImg[0].filename,
          products_id: productoCreado.id,
          is_primary : true
        },
        {
          url: arrayImg[1].filename,
          products_id: productoCreado.id,
          is_primary : false
        },
        {
          url: arrayImg[2].filename,
          products_id: productoCreado.id,
          is_primary : false
        }
      ])
      res.redirect("/product/list");
    } catch (error) {
      console.log(error);
    }
  },
  mostrarPorCat: async (req, res) => {
    try {
      const products = await db.Products.findAll({
        where: {
          category: { name: req.params.category },
        },
        include: { model: db.category },
      });

      //   const productByCategory = products.filter(
      //     (producto) => producto.category == req.params.category
      //   );
      //   if (req.params.category) {
      //     res.render("product-list", { productos: productByCategory });
      //   }
    } catch (error) {
      console.log(error);
    }
  },
  detalleID: async (req, res) => {
    try {
      const products = await db.Products.findAll();
      let idProd = req.params.id;
      let otherProd = products.filter(
        (product) =>
          product.category == idProd.category && product.id !== idProd.id
      );
      res.render("product-detail", { idProd, otherProd });
    } catch (error) {
      console.log(error);
    }
  },
  editarProductoForm: async (req, res) => {
    try {
      const product = await db.Products.findByPk(req.params.id);
      res.render("edicion-producto", { product });
    } catch (error) {
      console.log(error);
    }
  },
  editarProducto: async (req, res) => {
    await db.Products.update(
      {
        name: req.body.name,
        description: req.body.description,
        category: req.body.categoria,
        trademark: req.body.marca,
        price: req.body.price,
        model: req.body.model,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    const productIndex = products.findIndex(
      (element) => element.id == req.params.id
    );
    let imagenes =
      req.files.length != 0
        ? req.files.map((element) => element.filename)
        : products[productIndex].image;
    products[productIndex] = {
      ...products[productIndex],
    };
    res.redirect("/");
  },
  eliminarProducto: (req, res) => {
    try {
      db.Products.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = productsController;
