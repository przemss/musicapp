const mongoose = require('mongoose')
const dotenv = require('dotenv')

mongoose.connect("mongodb+srv://admin:admin@cluster0.blfsz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then( ()=> {
        console.log("Connected to db!")
    })
    .catch( (err)=>{
        console.log(`Error connecting to the database. \n${err}`)
    })