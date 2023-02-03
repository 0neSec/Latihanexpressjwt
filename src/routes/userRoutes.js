const userRoutes = require('express').Router();
const userController= require('../controller/JWTController/userController');
const mahasiswaController = require('../controller/mahasiswaController');

userRoutes.post('/',userController.signin)
userRoutes.post('/daftar',userController.signup, mahasiswaController.postData)

module.exports = userRoutes