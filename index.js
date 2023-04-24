const express = require('express')
const mongoose = require('mongoose')
const app = express()  

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

//rotas da API
const personRoutes = require('./routes/personRouters')

app.use('/person', personRoutes)

//endpoint
app.get('/', (req,res) =>{
    res.json({message: 'Hi Express!'})
})

mongoose.connect('mongodb+srv//test:<password>@apicluster.6d0934.mongodb.net/bancodaapi?retryWrites=true&w=majority')
.then(()=>{
    console.log('conectamos ao mongoDB')
    app.listen(3000)
})
.catch((err)=> console.log(err))

