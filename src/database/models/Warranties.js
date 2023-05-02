module.exports = (sequelize, DataTypes) => {
  let alias = "Warranties";
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
    tablename: "warranties",
    timestamps: false,
  };

  const Warranties = sequelize.define(alias, columns, config);

  Warranties.associate = (models) => {
    Warranties.hasMany(models.Products, {
      as: 'warranties',
      foreignKey: 'warranties_id'
    })
  }

  return Warranties
};
