module.exports = (sequelize, DataTypes) => {
  let alias = "Products";
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
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(11, 2),
      allowNull: false,
    },
    model: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    product_categories_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product_categories",
        key: "id",
      },
    },
    status_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "status",
        key: "id",
      },
    },
    trademarks_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "trademarks",
        key: "id",
      },
    },
    families_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "families",
        key: "id",
      },
    },
    warranties_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "warranties",
        key: "id",
      },
    },
  };
  let config = {
    tablename: "products",
    timestamps: false,
  };

  const Products = sequelize.define(alias, columns, config);

  Products.associate = (models) => {
    Products.belongsTo(models.Warranties, {
      as: "warranties",
      foreignKey: "warranties_id",
    }),
      Products.belongsTo(models.Families, {
        as: "families",
        foreignKey: "families_id",
      }),
      Products.belongsTo(models.Status, {
        as: "status",
        foreignKey: "status_id",
      });
    Products.belongsTo(models.Product_Categories, {
      as: "category",
      foreignKey: "product_categories_id",
    });
    Products.hasMany(models.Product_Images, {
      as: "images",
      foreignKey: "products_id",
    });
    Products.belongsTo(models.Trademarks, {
      as: "trademark",
      foreignKey: "trademarks_id",
    });
    Products.hasOne(models.OrderItem)
  };

  return Products;
};
