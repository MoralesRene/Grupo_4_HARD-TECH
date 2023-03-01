const path = require('path')
const fs = require("fs")

let ListJSON= fs.readFileSync(__dirname+"../../data/listProducts.json","utf-8")
let listProducts = JSON.parse(ListJSON)


let homeController = {
    index: function (req, res) {
        let featuredProd= listProducts.filter((product)=>{
            return product.status=="Featured";
        
        })
        let offerProd= listProducts.filter((product)=>{
            return product.status=="Featured";})
        res.render("index.ejs",{featuredProd,offerProd})
    },
    search: function(req,res){
        let result= [];
        let search= req.query.search;
        for (let i = 0; i < listProducts.length; i++) {
            if(listProducts[i].name.match(search)){
                result.push(listProducts[i])
            }
        }
        res.render("product-list",{productos:result})
    }
}

module.exports = homeController