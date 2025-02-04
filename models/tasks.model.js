const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'in progress', 'completed'],
        default: 'pending'
    },
  proffesion:{
    type:mongoose.SchemaTypes.ObjectId
  },
  is_deleted:{
    type:Boolean,
    default:false
  }
})

module.exports = mongoose.model('Task', tasksSchema);