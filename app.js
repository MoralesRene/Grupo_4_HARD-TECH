const express = require("express");
const path = require("path")
const home = require('./routes/home')
const login = require('./routes/login')
const register = require('./routes/register')
const product = require('./routes/products')
const cart = require('./routes/cart')
const app = express();
const publicPath= path.join(__dirname,"public");

//Utilización de rutas
app.use(express.static(publicPath))
app.use("/", home)
app.use('/login', login)
app.use('/register', register)
app.use('/product', product)
app.use('/cart', cart)

//Definicion de puertos y apertura de servidor
const port= 3030;
app.listen(port, ()=>{
    console.log("Server Started on http://localhost:" + port)
})