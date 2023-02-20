const path = require("path")

let loginController = {
    index: (req,res)=>{
        res.render("login")
    }
}

module.exports = loginController