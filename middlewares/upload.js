const multer  = require('multer');
const fs = require("fs");
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = path.resolve('./book_images/uploads');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, "./book_images/uploads");
  },
  filename: function (req, file, cb) {
    const filename = `${Date.now()}-${file.originalname}`
    req.body.img_book = "uploads/" + filename;
    cb(null, filename);
  },
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    if( (/image\/(jpeg|tiff|png|webp|bmp|jpg)$/gi).test(file.mimetype) ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
})

module.exports = upload;