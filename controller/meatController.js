const meats= require('../models/meats')

function index(req, res){
    res.send(meats)
}

function show(req, res){
    console.log(req)
    res.send(meats[req.params.id])
}

module.exports={
    index,
    show
}
