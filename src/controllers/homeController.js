const path = require('path')
const fs = require("fs")

let ListJSON= fs.readFileSync(__dirname+"../../data/listProducts.json","utf-8")
let listProducts = JSON.parse(ListJSON)


let homeController = {
    index: function (req, res) {
        res.render("index.ejs")
    },
    search: function(req,res){
        let result= [];
        for (let i = 0; i < listProducts.length; i++) {
            if(listProducts[i].nombre.includes(req.query.search)){
                result.push(listProducts[i])
            }
        }
        res.render("product-list",{productos:result})
    }
}

module.exports = homeController