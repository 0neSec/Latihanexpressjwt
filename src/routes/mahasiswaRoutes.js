const mahasiswaRoutes = require('express').Router();
const mahasiswaController=require('../controller/mahasiswaController')
// const authMiddleware =require ('../helpers/cloudinaryMiddleware')
// const uploadMiddleware=  require('../helpers/uploadMiddleware')
// const cloudinaryMiddleware =require('../helpers/cloudinaryMiddleware')


mahasiswaRoutes.get('/', mahasiswaController.getAll)
mahasiswaRoutes.post('/',  mahasiswaController.postData)
mahasiswaRoutes.put('/:id', mahasiswaController.editData)
mahasiswaRoutes.delete('/:id', mahasiswaController.delete)
mahasiswaRoutes.get('/:id', mahasiswaController.getByID)


module.exports = mahasiswaRoutes;

// uploadMiddleware, cloudinaryMiddleware,