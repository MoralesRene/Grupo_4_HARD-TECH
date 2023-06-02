module.exports = (sequelize, DataTypes) => {
  let alias = "Status";
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
    tableName: "status",
    timestamps: false,
  };

  const Status = sequelize.define(alias, columns, config);

  Status.associate = (models) => {
    Status.hasMany(models.Products, {
      as: "status",
      foreignKey: "status_id",
    });
  };

  return Status
};
