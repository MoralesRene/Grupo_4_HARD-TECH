const path = require('path')
const fs = require("fs")
const db = require("../database/models")
const { Op } = require("sequelize")

let homeController = {
    index: async (req, res)=> {
        const productsFeatured = await db.Products.findAll({
            where:{
                status_id: 1
            }
        })
        const productsOffers = await db.Products.findAll({
            where:{
                status_id: 2
            }
        })
        const images = await db.Product_Images.findAll({
            where:{
              is_primary: true
            }
          })
        res.render("index" ,{featuredProd:productsFeatured,offerProd:productsOffers,images})
    },
    search: async (req,res)=> {
        const products = await db.Products.findAll({
            where:{
                name: {
                    [Op.like]: `%${req.query.search}%`
                }
            }
        })
        const images = await db.Product_Images.findAll({
            where:{
              is_primary: true
            }
          })
          const trademarks = await db.Trademarks.findAll()

        res.render("product-list",{productos:products,images,trademarks})
    }
}

module.exports = homeController