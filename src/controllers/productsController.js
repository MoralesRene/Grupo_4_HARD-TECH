const path = require("path");
const {validationResult} = require ("express-validator");
const db = require("../database/models");
const { Op, and } = require("sequelize")

let productsController = {
  index: async function (req, res) {
    try {
      const products = await db.Products.findAll({
        include:["trademark"]
      });
      const images = await db.Product_Images.findAll({
        where:{
          is_primary: true
        }
      })
      const categories = await db.Product_Categories.findAll()
      const trademarks = await db.Trademarks.findAll()
      switch (req.params.element) {
        case "resumen":
          res.render("cart-resume",{ session: req.session.userLogged });
          break;
        case "create":
          res.render("crear-producto", { categories, trademarks });
          break;
      }
    } catch (error) {
      console.log(error);
    }
  },
  cart: (req,res)=>{
      res.render("product-cart");
  },
  list: async (req,res)=>{
    try {
      const products = await db.Products.findAll({
        include:["trademark"]
      });
      const categories = await db.Product_Categories.findAll()
      const images = await db.Product_Images.findAll({
        where:{
          is_primary: true
        }
      })
        // const products = await db.Products.findAll({
        //   include:["trademark"],
        //   where:{
        //     product_categories_id: category.id
        //   }
        // });
        //sin filtros
        if (req.query.or && req.query.or ==0) {
          products.sort((a,b)=>a.price-b.price)
        }else if(req.query.or && req.query.or ==1){
          products.sort((a,b)=>b.price-a.price)
        }else if(req.query.or && req.query.or ==4){
          products.sort((a,b)=>a.name-b.name)
        }
      const trademarks = await db.Trademarks.findAll()
      //Si no existen filtros
      if (!req.query.filter && !req.query.min && !req.query.max ) {
        res.render("product-list", { productos: products, images ,trademarks });
        //Si existe solo filter
      }else if(req.query.filter && !req.query.min || !req.query.max){
        const productFilterByMark = products.filter( product =>  product.trademark.name == req.query.filter)
        res.render("product-list", { productos: productFilterByMark, images ,trademarks });
        //Si existe min o max pero no filter
      }else if(req.query.min && req.query.max && !req.query.filter){
        const trademarks = await db.Trademarks.findAll()
        const productFilterPrice = await db.Products.findAll({
          include:["trademark"],
          where:{
            price: {
              [Op.gt]: req.query.min,
              [Op.lt] : req.query.max
            }
          }
        })
        if (req.query.or && req.query.or ==0) {
          productFilterPrice.sort((a,b)=>a.price-b.price)
        }else if(req.query.or && req.query.or ==1){
          productFilterPrice.sort((a,b)=>b.price-a.price)
        }else if(req.query.or && req.query.or ==4){
          productFilterPrice.sort((a,b)=>a.name-b.name)
        }
        res.render("product-list", { productos: productFilterPrice, images ,trademarks });
        //Si existen los filter,min y max
      }else if(req.query.min && req.query.max && req.query.filter){
        const trademarks = await db.Trademarks.findAll()
        const productFilterPrice = await db.Products.findAll({
          include:["trademark"],
          where:{
            price: {
              [Op.gt]: req.query.min,
              [Op.lt] : req.query.max
            },
          }
        })
        const productFilterByMark = productFilterPrice.filter( product => product.trademark.name == req.query.filter)
        if (req.query.or && req.query.or ==0) {
          productFilterByMark.sort((a,b)=>a.price-b.price)
        }else if(req.query.or && req.query.or ==1){
          productFilterByMark.sort((a,b)=>b.price-a.price)
        }else if(req.query.or && req.query.or ==4){
          productFilterByMark.sort((a,b)=>a.name-b.name)
        }
        // res.json(productFilterByMark)
        res.render("product-list", { productos: productFilterByMark, images ,trademarks });
      }

      res.render("product-list", { productos: products,  images,trademarks });
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
        model: req.body ? req.body.model : "PC",
        price: req.body.price,
        stock: req.body.stock,
        //Null
        discount: req.body.discount,
        product_categories_id: category.id,
        trademarks_id: trademark ? trademark.id: null,
        families_id: family ? family.id: null,
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
            include:["trademark"],
            where:{
              product_categories_id: category.id
            }
          });
          //sin filtros
          if (req.query.or && req.query.or ==0) {
            products.sort((a,b)=>a.price-b.price)
          }else if(req.query.or && req.query.or ==1){
            products.sort((a,b)=>b.price-a.price)
          }else if(req.query.or && req.query.or ==4){
            products.sort((a,b)=>a.name-b.name)
          }
        const trademarks = await db.Trademarks.findAll()
        //Si no existen filtros
        if (!req.query.filter && !req.query.min && !req.query.max ) {
          res.render("product-list", { productos: products, images ,trademarks });
          //Si existe solo filter
        }else if(req.query.filter && !req.query.min || !req.query.max){
          const productFilterByMark = products.filter( product =>  product.trademark.name == req.query.filter)
          res.render("product-list", { productos: productFilterByMark, images ,trademarks });
          //Si existe min o max pero no filter
        }else if(req.query.min && req.query.max && !req.query.filter){
          const trademarks = await db.Trademarks.findAll()
          const productFilterPrice = await db.Products.findAll({
            include:["trademark"],
            where:{
              price: {
                [Op.gt]: req.query.min,
                [Op.lt] : req.query.max
              }
            }
          })
          if (req.query.or && req.query.or ==0) {
            productFilterPrice.sort((a,b)=>a.price-b.price)
          }else if(req.query.or && req.query.or ==1){
            productFilterPrice.sort((a,b)=>b.price-a.price)
          }else if(req.query.or && req.query.or ==4){
            productFilterPrice.sort((a,b)=>a.name-b.name)
          }
          res.render("product-list", { productos: productFilterPrice, images ,trademarks });
          //Si existen los filter,min y max
        }else if(req.query.min && req.query.max && req.query.filter){
          const trademarks = await db.Trademarks.findAll()
          const productFilterPrice = await db.Products.findAll({
            include:["trademark"],
            where:{
              price: {
                [Op.gt]: req.query.min,
                [Op.lt] : req.query.max
              },
              product_categories_id: category.id
            }
          })
          const productFilterByMark = productFilterPrice.filter( product => product.trademark.name == req.query.filter)
          if (req.query.or && req.query.or ==0) {
            productFilterByMark.sort((a,b)=>a.price-b.price)
          }else if(req.query.or && req.query.or ==1){
            productFilterByMark.sort((a,b)=>b.price-a.price)
          }else if(req.query.or && req.query.or ==4){
            productFilterByMark.sort((a,b)=>a.name-b.name)
          }
          // res.json(productFilterByMark)
          res.render("product-list", { productos: productFilterByMark, images ,trademarks });
        }
    } catch (error) {
      console.log(error);
    }
  },
  listByCondition: async (req,res)=>{
    try {
      
      const state = await db.Status.findOne({
        where:{
          name: req.params.condition
        }
      })
      const images = await db.Product_Images.findAll({
        where:{
          is_primary: true
        }
      })
        const products = await db.Products.findAll({
          include:["trademark"],
          where:{
            status_id: state.id
          }
        });
        //sin filtros //faltan agregar 2 formas de orden segun stock
        if (req.query.or && req.query.or ==0) {
          products.sort((a,b)=>a.price-b.price)
        }else if(req.query.or && req.query.or ==1){
          products.sort((a,b)=>b.price-a.price)
        }else if(req.query.or && req.query.or ==4){
          products.sort((a,b)=>a.name-b.name)
        }
      const trademarks = await db.Trademarks.findAll()
      //Si no existen filtros
      if (!req.query.filter && !req.query.min && !req.query.max) {
        res.render("product-list", { productos: products, images ,trademarks });
        //Si existe solo filter
      }else if(req.query.filter &&!req.query.min || !req.query.max){
        const productFilterByMark = products.filter( product =>  product.trademark.name == req.query.filter)
        res.render("product-list", { productos: productFilterByMark, images ,trademarks });
        //Si existe min o max pero no filter
      }else if(req.query.min && req.query.max && !req.query.filter){
        const trademarks = await db.Trademarks.findAll()
        const productFilterPrice = await db.Products.findAll({
          include:["trademark"],
          where:{
            price: {
              [Op.gt]: req.query.min,
              [Op.lt] : req.query.max
            }
          }
        })
        if (req.query.or && req.query.or ==0) {
          productFilterPrice.sort((a,b)=>a.price-b.price)
        }else if(req.query.or && req.query.or ==1){
          productFilterPrice.sort((a,b)=>b.price-a.price)
        }else if(req.query.or && req.query.or ==4){
          productFilterPrice.sort((a,b)=>a.name-b.name)
        }
        res.render("product-list", { productos: productFilterPrice, images ,trademarks });
        //Si existen los filter,min y max
      }else if(req.query.min && req.query.max && req.query.filter){
        const trademarks = await db.Trademarks.findAll()
        const productFilterPrice = await db.Products.findAll({
          include:["trademark"],
          where:{
            price: {
              [Op.gt]: req.query.min,
              [Op.lt] : req.query.max
            },
          }
        })
        const productFilterByMark = productFilterPrice.filter( product => product.trademark.name == req.query.filter)
        if (req.query.or && req.query.or ==0) {
          productFilterByMark.sort((a,b)=>a.price-b.price)
        }else if(req.query.or && req.query.or ==1){
          productFilterByMark.sort((a,b)=>b.price-a.price)
        }else if(req.query.or && req.query.or ==4){
          productFilterByMark.sort((a,b)=>a.name-b.name)
        }
        // res.json(productFilterByMark)
        res.render("product-list", { productos: productFilterByMark, images ,trademarks });
      }else if(req.query.min && req.query.max && req.query.filter){
        const trademarks = await db.Trademarks.findAll()
        const productFilterPrice = await db.Products.findAll({
          include:["trademark","category"],
          where:{
            price: {
              [Op.gt]: req.query.min,
              [Op.lt] : req.query.max
            },
          }
        })
        const productFilterByMark = productFilterPrice.filter( product => product.trademark.name == req.query.filter)
        if (req.query.or && req.query.or ==0) {
          productFilterByMark.sort((a,b)=>a.price-b.price)
        }else if(req.query.or && req.query.or ==1){
          productFilterByMark.sort((a,b)=>b.price-a.price)
        }else if(req.query.or && req.query.or ==4){
          productFilterByMark.sort((a,b)=>a.name-b.name)
        }
        // res.json(productFilterByMark)
        res.render("product-list", { productos: productFilterByMark, images ,trademarks,category });
      }
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
        limit:5,
        where:{
          product_categories_id: product.product_categories_id
        }
        , include:["images","trademark"]
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
        include:["category","families","trademark","warranties","images","status"]
      });
      const categories = await db.Product_Categories.findAll()
      const trademarks = await db.Trademarks.findAll()
      const families = await db.Families.findAll()
      const status = await db.Status.findAll()
      const warranties = await db.Warranties.findAll()
      const images = await db.Product_Images.findAll({
        where:{
          products_id: product.id
        }
      })
      //faltan agregar la vista previa y la edicion de imagenes
      res.render("edicion-producto", { product,categories,trademarks,families,status,warranties,images });
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
        include:["category","families","trademark","warranties","images","status"]
      });
      const categories = await db.Product_Categories.findAll()
      const trademarks = await db.Trademarks.findAll()
      const families = await db.Families.findAll()
      const status = await db.Status.findAll()
      return res.render("edicion-producto",{
        errors: resultvalidation.mapped(),product,categories,trademarks,families,status 
      });
    } else{

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
      const status = await db.Status.findOne({
        where:{
          name: req.body.status
        }
      })
      await db.Products.update(
        {
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          stock: req.body.stock,
          discount: req.body.discount,
          model: req.body ? req.body.model : "PC",
          product_categories_id: category.id,
          families_id: family ? family.id: null,
          trademarks_id: trademark ? trademark.id: null,
          warranties_id:warranty.id,
          status_id: status.id
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      const arrayImg = req.files;
      const actualizarImagen = await db.Product_Images.bulkCreate(
        arrayImg.map((img,index) => {
         return  {
          url: img.filename,
          products_id: req.params.id,
          is_primary: false
         }
        }),
        {
          updateOnDuplicate:["url"]
        }
      )
      res.redirect("/");
    }

  },
  eliminarProducto: async (req, res) => {
    try {
      const id = req.params.id
      Promise.all([
        db.Products.destroy({
          where:{
            id:id
          }
        }),
        db.Product_Images.destroy({
          where:{
            products_id:id
          }
        })
      ]).then(result=>{
        if (result) {
          res.redirect("/");
        }else{
          res.send("no se pudo eliminar")
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = productsController;


