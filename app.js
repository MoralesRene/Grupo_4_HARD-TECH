const express = require("express");
const app= express();

const path = require("path")

const publicPath= path.join(__dirname,"public");

app.use(express.static(publicPath))
/** Para usar en las pruebas 
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
})
 */

const port=3030;
app.listen(port, ()=>{
    console.log("Server Started on http://localhost:"+port)
})


