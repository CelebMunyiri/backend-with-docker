const mongoose = require('mongoose');

const professionSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,

    }
})

module.exports = mongoose.model('Profession',professionSchema)