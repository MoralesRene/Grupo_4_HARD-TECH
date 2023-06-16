const path = require("path");
const {validationResult} = require ("express-validator");
const db = require("../database/models");

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
      const state = await db.Status.findOne({
        where:{
          name: req.body.status
        }
      })
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
        warranties_id: warranty.id,
        status_id:state.id
      });
      const arrayImg= req.files;
      const imagenProduct = await db.Product_Images.bulkCreate(
          arrayImg.map((image,index)=>{
            return {
              url: image.filename,
              products_id: productoCreado.id,
              is_primary : index==0
            }
          })
        )
      res.redirect("/product/list");
    } catch (error) {
      console.log(error);
    }
  },
  mostrarPorCat: async (req, res) => {
    try {
      const category = await db.Product_Categories.findOne({
        where: {
          name: req.params.category
        }
      })
      const images = await db.Product_Images.findAll({
        where:{
          is_primary: true
        }
      })
      const products = await db.Products.findAll({
        where:{
          product_categories_id: category.id
        }
      });
      const trademarks = await db.Trademarks.findAll()
      res.render("product-list", { productos: products, images ,trademarks });
    } catch (error) {
      console.log(error);
    }
  },
  detalleID: async (req, res) => {
    try {
      const { id } = req.params 
      const product = await db.Products.findByPk(id,{
        include:["category","warranties","families","trademark","images"]
      });
      const imagenes = await db.Product_Images.findAll({
        where:{
          products_id: product.id
        }
      })
      const allProducts = await db.Products.findAll({
        where:{
          product_categories_id: product.product_categories_id
        }
        , include:["images"]
      })
      //saco el producto mostrado actualmente de similares
      const similarProducts = allProducts.filter(producto => producto.id != req.params.id)
      const images = await db.Product_Images.findAll({
        where:{
          is_primary:true
        }
      })
      res.render("product-detail", { product,imagenes,similarProducts,images });

    } catch (error) {
      console.log(error);
    }
  },
  editarProductoForm: async (req, res) => {
    try {
      const product = await db.Products.findByPk(req.params.id,{
        include:["category","families","trademark","warranties","images"]
      });
      const categories = await db.Product_Categories.findAll()
      const trademarks = await db.Trademarks.findAll()
      const families = await db.Families.findAll()
      //faltan agregar la vista previa y la edicion de imagenes
      res.render("edicion-producto", { product,categories,trademarks,families });
    } catch (error) {
      console.log(error);
    }
  },
  editarProducto: async (req, res) => {
    console.log(req.body)
    const resultvalidation = validationResult(req);
    console.log(resultvalidation)
    if (resultvalidation.errors.length > 0){
      const product = await db.Products.findByPk(req.params.id,{
        include:["category","families","trademark","warranties","images"]
      });
      const categories = await db.Product_Categories.findAll()
      const trademarks = await db.Trademarks.findAll()
      const families = await db.Families.findAll()
      return res.render("edicion-producto",{
        errors: resultvalidation.mapped(),
        oldData: req.body, product,categories,trademarks,families 
      });
    } 

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
        name: req.body.families
      }
    })
    const warranty = await db.Warranties.findOne({
      where: {
        name: req.body.warranty
      }
    })
    await db.Products.update(
      {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        model: req.body.model,
        product_categories_id: category.id,
        families_id: family.id,
        trademarks_id:trademark.id,
        warranties_id:warranty.id
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
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
  }
}
module.exports = productsController;
