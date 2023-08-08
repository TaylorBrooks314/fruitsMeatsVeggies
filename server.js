const express =require('express')

const app = express()

// importing our routes
const fruitRoutes= require('./routes/fruitRoutes');
const meatRoutes= require('./routes/meatRoutes')
const veggieRoutes= require('./routes/veggieRoutes')

const port= 8080; 

// connecting our fruit routes to our express app
app.use('/fruits', fruitRoutes)
app.use('/meats', meatRoutes)
app.use('/veggies',veggieRoutes)

// root route
app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(port, ()=>{
    console.log('listening on port: ' + port)
})

