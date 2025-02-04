const mongoose = require('mongoose')
const mongodb = require('mongodb')
const { mongoClient } = require('mongodb')
const dotenv = require('dotenv')




async function connectDB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/test", {
            useNewUrlParser: true,
            useUnifiedTopology: false,
            
        })

        console.log('MongoDB connected successfully')
    } catch(err){
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDB


