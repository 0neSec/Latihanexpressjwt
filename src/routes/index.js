const mainRouts = require('express').Router();
const menuRoutes = require('./menuRoutes');
const mahasiswaRoutes = require('./mahasiswaRoutes');
const userRoutes = require('./userRoutes');


mainRouts.use('/menu', menuRoutes);
mainRouts.use('/mahasiswa', mahasiswaRoutes);
mainRouts.use('/user', userRoutes);


module.exports= mainRouts;  