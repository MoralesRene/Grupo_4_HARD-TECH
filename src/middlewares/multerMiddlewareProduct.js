const multer= require("multer");
const path = require("path")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const destinationPath = path.join(__dirname, '../public/img/products')
      cb(null, destinationPath);
    },
    filename: (req, file, cb) => {
      let filename = `product-${Date.now()}_img${path.extname(file.originalname)}`;
      cb(null, filename);
    },
  }); 
  
  const upload = multer({ storage });

  
  module.exports=upload;