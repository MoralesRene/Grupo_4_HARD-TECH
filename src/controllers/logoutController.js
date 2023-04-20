const path = require("path");

const logoutController = {
    index: (req, res) => {
        res.render("logout");
    }
}

module.exports = logoutController;