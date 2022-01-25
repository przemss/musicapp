const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SongSchema = new Schema({
    id: {
        type: String, 
    },
    tytulik: {
        type: String, 
    },
    autorek: {
        type: String
    },
    sluwka: {
        type: String
    },
    foteczka:{
        type: String
    }   
}, { collection: 'Songs' })

module.exports=mongoose.model('Songs', SongSchema, 'Songs');