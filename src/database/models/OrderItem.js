module.exports = (sequelize, DataTypes) => {
    let alias = "OrderItem";
    let columns = {
      id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      orders_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      products_id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    };
    let config = {
      tablename: "orderitems",
      timestamps: false,
    };
  
    const OrderItem = sequelize.define(alias, columns, config);
    
    OrderItem.associate = (models)=>{
        OrderItem.belongsTo(models.Order,{
          as:"orderItems",
          foreignKey: "orders_id"  
        })
    }
    OrderItem.associate = (models)=>{
        OrderItem.belongsTo(models.Products,{
            as: "products",
            foreignKey: "products_id"
        })
    }
    return OrderItem
  };
  