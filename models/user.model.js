const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    phone:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:8
    },
    profession:{
        type:mongoose.SchemaTypes.ObjectId,
        ref: 'Profession',
        required: true
    },
    tasks:[{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Task'
    }
    ],
    role:{
        type:String,
        enum:['user', 'admin'],
        default:'user'
    },
    service_offering:{
    type:String,
    enum:['giver','receiver']
    },
    location:{
        type: String,
        required: true
    },
    image:{
        type: String,
        default: null
    },
    gender:{
        type: String,
        enum:['male','female','other'],
        required: true
    },
    is_deleted:{
        type:Boolean,
        default:false
      },
      rating:{
        type: Number,
        default: 0
      }
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema);