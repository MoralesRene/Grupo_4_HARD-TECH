const db = require("../../database/models");
const sequelize = require("sequelize");

const APIProductController = {
  productList: async (req, res) => {
    if (!req.params.id) {
      let products = await db.Products.findAll({ include: ["category"] });
      products = products.map((element) => {
        return {
          id: element.dataValues.id,
          name: element.dataValues.name,
          description: element.dataValues.description,
          category: element.dataValues.category.dataValues.name,
          detail: `http://localhost:3030/api/products/${element.dataValues.id}`,
        };
      });
      let category = await db.Products.findAll({
        attributes: [
          [sequelize.literal("category.name"), "name"],
          [sequelize.fn("COUNT", sequelize.col("*")), "count"],
        ],
        include: ["category"],
        group: ["category.name"],
      });
      res.json({count: products.length, countByCategory: {category}, products}); 
    } else {
      let data = await db.Products.findByPk(req.params.id, { include: ["category", "families", "status", "category", "images", "trademark"] });
      const {product_categories_id, status_id, trademarks_id, families_id, warranties_id, ...product} = data.dataValues
      res.json(product)
    }
  },
};

module.exports = APIProductController;
