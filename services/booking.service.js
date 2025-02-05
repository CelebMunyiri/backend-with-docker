const { User, UserBooking} = require('../models')

const bookServiceGiver = async(body)=>{
    try{
const userBooking = new UserBooking(body)

await userBooking.save()

return userBooking;


    }catch(err){
        throw new Error(`Error booking service: ${err.message}`);
    }
}


const getUserBookings = async(body)=>{
    const bookings = await UserBooking.find().populate('user')

    return bookings;
 
}

module.exports = {bookServiceGiver, getUserBookings}

