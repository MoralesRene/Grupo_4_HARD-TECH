const path = require("path")

let registerController = {
    index: (req,res)=>{
        res.render("register")
    }
}

module.exports = registerController