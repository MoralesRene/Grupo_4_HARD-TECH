require("dotenv").config();
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const productAPI = require("../src/routes/api/products")
const userAPI = require("../src/routes/api/users")
const home = require("../src/routes/home");
const login = require("../src/routes/login");
const register = require("../src/routes/register");
const product = require("../src/routes/products");
const cart = require("../src/routes/cart");
const user = require("./routes/users");
const servicioTecnico = require("./routes/ayuda");
const quieroComunicarme = require("./routes/quieroComunicarme");
const exp = require("constants");
const multer = require("multer");
const cookieParser = require("cookie-parser")
const app = express();
const session = require('express-session')
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')
const adminMiddleware = require("./middlewares/adminMiddleware");
const { cookie } = require("express-validator");
const recordarMiddleware = require("./middlewares/recordarMiddleware");
const cors = require("cors")
const cookies = require("cookie-parser")

const publicPath = path.join(__dirname, "/public");

//Middlewares
app.use(cors())
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
  secret: "session",
  resave: false,
  saveUninitialized: false,
}
));
app.use(adminMiddleware)
app.use(userLoggedMiddleware)
app.use(recordarMiddleware)
app.use(cors())
app.use(cookies())


//Utilización de rutas
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use("/api", userAPI)
app.use("/api", productAPI)
app.use("/", home);
app.use("/login", login);
app.use("/register", register);
app.use("/", user);
app.use("/product", product);
app.use("/cart", cart);
app.use("/servicioTecnico", servicioTecnico);
app.use("/quieroComunicarme", quieroComunicarme);

app.use((req, res, next) => {
  res.status(404).render("not-found");
});

//Motor de plantilla
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Definicion de puertos y apertura de servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server Started on http://localhost:" + port);
});
