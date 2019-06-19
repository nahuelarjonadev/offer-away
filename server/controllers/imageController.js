router.post('/test', saveProductImage, (req, res, next) => { console.log(req.body); next() }, (req, res) => {
  res.status(200).json(req.body);
})

function createUpload(bodyKey, filename, filePath) {
  const storage = multer.memoryStorage()
  const upload = multer(storage); // <- implement  
  const uploadAsMiddleware = upload.fields([{ name: bodyKey, maxCount: 1 }]);
  return uploadAsMiddleware;
}

function saveProductImage(req, res, next) {
  const uploadMiddleware = createUpload('image', req.body.SKU, './server/public/productImages/');
  uploadMiddleware(req, res, (err) => {
    if (err) return next(err);
    console.log(req.body.SKU);
    console.log(req.files.image);
    return next();
  });
}

function saveLogo(req, res, next) {
  const uploadMiddleware = createUpload('image', 'logo', './server/public/');
  uploadMiddleware(req, res, next);
}