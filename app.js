const express = require("express");
const app= express();

const path = require("path")

const publicPath= path.join(__dirname,"public");

app.use(express.static(publicPath))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"))
})
app.get("/product-detail",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/product-detail.html"))
})
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
})
app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/register.html"))
})
app.get("/product-list",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/product-list.html"))
})
app.get("/product-cart",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/product-cart.html"))
})
app.get("/cart-ship",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/cart-ship.html"))
})
app.get("/cart-pay",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/cart-pay.html"))
})
app.get("/cart-resume",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/cart-resume.html"))
})
const port=3030;
app.listen(port, ()=>{
    console.log("Server Started on http://localhost:"+port)
})



