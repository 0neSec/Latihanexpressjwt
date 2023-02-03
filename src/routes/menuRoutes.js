const menuRoutes = require('express').Router();
const menuController=require('../controller/menuController')
// const authMiddleware =require ('../helpers/cloudinaryMiddleware')
// const uploadMiddleware=  require('../helpers/uploadMiddleware')
// const cloudinaryMiddleware =require('../helpers/cloudinaryMiddleware')


menuRoutes.get('/', menuController.getAll)
menuRoutes.post('/',  menuController.postData)
menuRoutes.put('/:id', menuController.editData)
menuRoutes.delete('/:id', menuController.delete)


module.exports = menuRoutes;

// uploadMiddleware, cloudinaryMiddleware,