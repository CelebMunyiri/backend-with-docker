const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
   payment_for:{
    type:String,
    enum:['get_tasks','see_professionals']
   }
})

module.exports = mongoose.model('Payment', paymentSchema);