const multer = require('multer');
const path =require('path');
const fs = require('fs');

const publicPath = path.resolve(__dirname, '..');


const imageCtrl = {
  saveProductImage(req, res, next) {
    const uploadMiddleware = createUpload('image', req.body.SKU, 'public/productImages');
    uploadMiddleware(req, res, (err) => {
      if (err) return next(err);
      console.log(req.body.SKU);
      console.log(req.files.image);
      const folderPath = path.resolve(publicPath, 'public/productImages');
      fs.renameSync(folderPath + '/undefined.jpg', folderPath + '/' + req.body.SKU + '.jpg')
      res.locals.response = {
        success: true,
        result: 'Completed',
      };
      return next();
    });
  },

  saveLogo(req, res, next) {
    const uploadMiddleware = createUpload('image', 'logo', 'public');
    uploadMiddleware(req, res, next);
  },

  none(req, res, next) {
    const uploadMiddleware = createNoneImageUpload();
    uploadMiddleware(req, res, next);
  }
}

function createUpload(bodyKey, filename, filePath) {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(publicPath, filePath)) // <- where to store
    },
    filename: function (req, file, cb) {
      cb(null, filename + '.jpg') // <- set new name for uploaded image
    }
  })
  const upload = multer({storage}); // <- implement  
  const uploadAsMiddleware = upload.fields([{ name: bodyKey, maxCount: 1}]);
  return uploadAsMiddleware;
}

function createNoneImageUpload() {
  const storage = multer.memoryStorage()
  const upload = multer({ storage }); // <- implement  
  const uploadAsMiddleware = upload.fields([{ name: 'image', maxCount: 1 }]);
  return uploadAsMiddleware;
}

module.exports = imageCtrl;