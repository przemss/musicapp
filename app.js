const db = require('./db')
const Song = require('./models/schema')
const uniqid = require('uniqid')

const express = require('express')

const app = express()
port = 5000


app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.listen(process.env.PORT || port, ()=>{
    console.log('Server up')
})

app.get('/', (req, res)=>{
    Song.find({}, (err, details)=>{
        if(err){
            console.log(err)
        } else {
            res.end( JSON.stringify(details));
        }
    })
})

