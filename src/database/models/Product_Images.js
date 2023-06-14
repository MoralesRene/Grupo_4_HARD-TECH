module.exports = (sequelize, DataTypes) => {
  let alias = "Product_Images";
  let columns = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    is_primary: {
      type: DataTypes.BOOLEAN,
    },
    products_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "products",
        key: "id",
      },
    },
  };
  let config = {
    tablename: "product_images",
    timestamps: false,
  };

  const Product_Images = sequelize.define(alias, columns, config);
  
  Product_Images.associate = (models) => {
    Product_Images.belongsTo(models.Products, {
      as: "images",
      foreignKey: "products_id",
    });
  };

  Product_Images.beforeUpdate((productImage, options) => {
    if (productImage.is_primary) {
      return Product_Images.findOne({
        where: {
          products_id: productImage.products_id,
          is_primary: true,
        },
        attributes: ["id"],
        raw: true,
      })
        .then((existingPrimaryImage) => {
          if (existingPrimaryImage && existingPrimaryImage.id !== productImage.id) {
            throw new Error("Solo una imagen puede ser primaria.");
          }
        })
        .catch((error) => {
          throw error;
        });
    }
  });

  return Product_Images
};
