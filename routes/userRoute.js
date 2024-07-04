const express = require('express');
const userController=require('../controllers/userController')
const userRouter = express();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,'./uploads');
  },
  filename: function (req, file, cb) {
     return cb(null, file.originalname); 
  },
});
const upload = multer({storage });
userRouter.get('/',userController.register)
userRouter.post('/register',upload.single('file'),userController.registerProduct)

module.exports = userRouter;