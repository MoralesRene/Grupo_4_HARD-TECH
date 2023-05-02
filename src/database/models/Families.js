module.exports = (sequelize, DataTypes) => {
  let alias = "Families";
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
    tablename: "families",
    timestamps: false,
  };

  const Families = sequelize.define(alias, columns, config);
  
  Families.associate = (models) => {
    Families.hasMany(models.Products, {
      as: "families",
      foreignKey: "families_id",
    });
  };

  return Families
};
