module.exports = (sequelize, DataTypes) => {
  let alias = "Product_Categories";
  let columns = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  };
  let config = {
    tablename: "product_categories",
    timestamps: false,
  };

  const Product_Categories = sequelize.define(alias, columns, config);
  
  Product_Categories.associate = (models) => {
    Product_Categories.hasMany(models.Products, {
      as: "category",
      foreignKey: "product_categories_id",
    });
  };

  return Product_Categories
};
