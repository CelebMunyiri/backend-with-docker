const mongoose = require('mongoose');

const professionSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,

    },
    field:{
        type:String
    },
    is_deleted:{
        type:Boolean,
        default:false
    }
},
{
    timestamps: true
})

// professionSchema.pre('save',async(next)=>{

// })

module.exports = mongoose.model('Profession',professionSchema)