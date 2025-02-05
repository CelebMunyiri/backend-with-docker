const mongoose = require('mongoose');

const userBookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
    date:{
        type: Date,
        default:Date.now()
        
    },
    from:{
        type:Date
    },
    to:{
        type:Date
    },
    task:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Task',
        
    },
    profession:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Profession',
        
    }
})


module.exports = mongoose.model('UserBooking', userBookingSchema);