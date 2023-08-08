// bringing in fruits data
const fruits= require('../models/fruits')

// the callback function from index route
function index(req, res){
    res.send(fruits)
}

// show route
function show(req, res){
    res.send(fruits[req.params.id] || '<h1>Not Found</h1>')
}

module.exports={
    index,
    show
}