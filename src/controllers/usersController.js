const path = require('path')
const fs = require("fs")

let userJSON = fs.readFileSync(__dirname + "../../data/users.json", "utf-8")
let listUser = JSON.parse(userJSON)

let userController = {
    index: (req, res) => {
        res.render("users/profile",
            { session: req.session.userLogged })
    }

}
module.exports = userController