const path = require("path")

let homeController = {
    index: function (req, res) {
        res.render("index.ejs")
    }
}

module.exports = homeController