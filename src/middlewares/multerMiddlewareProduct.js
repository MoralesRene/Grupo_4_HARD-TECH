const multer= require("multer");
const path = require("path")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const destinationPath = path.join(__dirname, '../public')
      cb(null, destinationPath);
    },
    filename: (req, file, cb) => {
      const nombreArchivo = `/img/${Date.now()}_img${path.extname(file.originalname)}`;
      cb(null, nombreArchivo);
    },
  }); 
  
  const upload = multer({ storage });

  
  module.exports=upload;