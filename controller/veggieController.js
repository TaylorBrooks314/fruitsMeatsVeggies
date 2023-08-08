const veggies= require('../models/veggies')

function index(req, res){
    res.send(veggies)
}

function show(req, res){
    res.send(veggies[req.params.id])
}

module.exports={
    index, 
    show
}