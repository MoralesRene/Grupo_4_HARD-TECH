module.exports = (sequelize, DataTypes) => {
  let alias = "Users";
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
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    locality: {
      type: DataTypes.TEXT,
    },
    adress: {
      type: DataTypes.TEXT,
    },
    number: {
      type: DataTypes.INTEGER,
    },
    roles_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "roles",
        key: "id",
      },
    },
  };
  let config = {
    tablename: "users",
    timestamps: true,
    createdAt:"created_at",
    updatedAt:"updated_at"
  };

  const Users = sequelize.define(alias, columns, config);

  Users.associate = (models) => {
    Users.belongsTo(models.Roles, {
      as: "roles",
      foreignKey: "roles_id",
    }),
    Users.hasMany(models.Order,{
      as: "users",
      foreignKey:"users_id"
    })
  };

  return Users;
};
