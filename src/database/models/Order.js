module.exports = (sequelize, DataTypes) => {
    let alias = "Order";
    let columns = {
      id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      paymentMethod: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      shippingMethod: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      users_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total:{
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    };
    let config = {
      tablename: "orders",
      timestamps: false,
    };
  
    const Order = sequelize.define(alias, columns, config);
    
    Order.associate = (models)=>{
        Order.belongsTo(models.Users,{
          as:"users",
          foreignKey: "users_id"  
        })
    }
    Order.associate = (models)=>{
        Order.hasMany(models.OrderItem,{
            as:"orders",
            foreignKey: "orders_id"
        })
    }

    return Order
  };
  