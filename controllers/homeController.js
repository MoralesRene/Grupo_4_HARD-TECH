const path = require("path")

let homeController = {
    index: function (req, res) {
        res.sendFile(path.join(__dirname,"../views/index.html"))
    }
}

module.exports = homeController