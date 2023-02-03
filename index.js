// require("dotenv").config({});
const express = require ('express');
const app = express();
const bodyParser = require("body-parser");
const port  = process.env.PORT || 5858;
const mainRouts= require('./src/routes')
 

app.use(express.urlencoded({extended:false}));
app.use ('/', mainRouts)

app.use(bodyParser.json());


app.listen (port, ()=>{
    console.log ("server run in port  "+ port)
});