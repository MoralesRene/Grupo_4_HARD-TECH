const { where } = require("sequelize");
const db = require("../../database/models");

const APIUserController = {
  userList: async (req, res) => {
    if (!req.params.id) {
      let data = await db.Users.findAll();
      data = data.map((element) => {
        return {
          id: element.dataValues.id,
          name: element.dataValues.name,
          email: element.dataValues.email,
          detail: `https://localhost:3030/${element.dataValues.id}`,
        };
      });
      res.json({ count: data.length, data: data });
    } else {
      let data = await db.Users.findByPk(req.params.id);
      const { password, confirmPassword, roles_id, ...user } = data.dataValues;
      res.json(user);
    }
  },
};

module.exports = APIUserController;
