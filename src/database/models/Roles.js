module.exports = (sequelize, DataTypes) => {
  let alias = "Roles";
  let columns = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }
  let config = {
    tablename: 'roles',
    timestamps: false
  }

  const Roles = sequelize.define(alias, columns, config);

  Roles.associate = (models) => {
    Roles.hasMany(models.Users, {
      as: 'roles',
      foreignKey: 'roles_id'
    })
  }

  return Roles
};
