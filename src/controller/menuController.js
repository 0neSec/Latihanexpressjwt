const {menu} = require('../models')
module.exports ={
    

getAll: (req, res)=> {
    menu.findAll()
    .then((data)=>{
        res.send({
            msg: 'succes get all data ',
            status :200,
            data 
        })
    })
    .catch ((err) => {
        res.send({
            msg:'eror get all data ',
            status : 500,
            err
        })
    })
},
postData : (req, res)=>{
    let{body} = req;
    menu.create(body)
    .then((data)=>{
        res.status(200).send({
            msg: "succes post data",
            status : 200,
            data
        })
    })
    .catch((err)=>{
        res.status(500).send({
            msg: 'failed get data',
            status: 500,
            err,
        })
    })
},
editData :(req, res)=> {
    const {body} = req;
    const{id}= req.params;
    menu.update(body, {
        where: {id}
    })
    .then((data)=>{
        res.send({
            msg: 'succes get all data ',
            status :200,
            data 
        })
    })
    .catch ((err) => {
        res.send({
            msg:'eror get all data ',
            status : 500,
            err
        })
    })
},
delete:(req, res )=>{
    const {id} =req.params;
    menu.destroy({
        where: {id}
    })
    .then((data)=>{
        res.send({
            msg: 'succes delet ',
            status :200,
            data 
        })
    })
    .catch ((err) => {
        res.send({
            msg:'eror delete ',
            status : 500,
            err
        })
    })
}
}
