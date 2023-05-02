module.exports = (sequelize, DataTypes) => {
  let alias = "Trademarks";
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
    tablename: "trademarks",
    timestamps: false,
  };

  const Trademarks = sequelize.define(alias, columns, config);

  Trademarks.associate = (models) => {
    Trademarks.hasMany(models.Products, {
      as: "trademark",
      foreignKey: "trademarks_id",
    });
  };

  return Trademarks
};
