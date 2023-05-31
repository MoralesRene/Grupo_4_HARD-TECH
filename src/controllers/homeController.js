const path = require('path')
const fs = require("fs")
const db = require("../database/models")
const { Op } = require("sequelize")

let homeController = {
    index: async (req, res) => {
        const productsFeatured = await db.Products.findAll({
            where: {
                status_id: 1
            }
        })
        const productsOffers = await db.Products.findAll({
            where: {
                status_id: 2
            }
        })
        const images = await db.Product_Images.findAll({
            where: {
                is_primary: true
            }
        })
        const trademark = [
            "marca-1.png",
            "marca-2.png",
            "marca-3.png",
            "marca-4.png",
            "marca-5.png",
            "marca-6.png",
            "marca-7.png",
            "marca-8.png"
        ]
        res.render("index", { featuredProd: productsFeatured, offerProd: productsOffers, images,trademark })
    },
    search: async (req, res) => {
        const products = await db.Products.findAll({
            where: {
                name: {
                    [Op.like]: `%${req.query.search}%`
                }
            }
        })
        const images = await db.Product_Images.findAll({
            where: {
                is_primary: true
            }
        })
        const trademarks = await db.Trademarks.findAll()

        res.render("product-list", { productos: products, images, trademarks })
    }
}

module.exports = homeController