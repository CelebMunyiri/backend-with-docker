const {User,Task,Profession} = require('../models')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const createUserService = async(body)=>{
        const user = new User(body)

        user.password = bcrypt.hashSync(body.password,6)
        
        await user.save()
   
        return user;

}

const updateUser = async(id,body)=>{
const user = await User.findByIdAndUpdate(id,body)
return user;
}

const softDelete = async(id)=>{
    const user = await User.findByIdAndUpdate(id, {is_deleted: true},{new:true}).select('-password')

    return user;

}

const updatePassword = async(id, password)=>{
 
    const user = await User.findByIdAndUpdate(id, {password: bcrypt.hashSync(password,6)},{new:true}).select('-password')

    return user;

}

const getUsers = async(query)=>{

    try {
        const searchRegex = query ? new RegExp(query, 'i') : null;


        const pipeline = [
            {
                $match: { is_deleted: false } 
            },
            {
                $lookup: {
                    from: 'professions', 
                    localField: 'profession', 
                    foreignField: '_id', 
                    as: 'professionDetails' 
                }
            },
            {
                $unwind: { path: '$professionDetails', preserveNullAndEmptyArrays: true } 
            },
            {
                $lookup: {
                    from: 'tasks', 
                    localField: 'tasks', 
                    foreignField: '_id', 
                    as: 'taskDetails' 
                }
            },
            {
                $match: {
                    $or: [] 
                }
            }
        ];

        if (searchRegex) {
           
            pipeline[3].$match.$or.push(
                { 'professionDetails.title': { $regex: searchRegex } }, 
                { 'taskDetails.title': { $regex: searchRegex } } 
            );
        }

        
        const users = await User.aggregate(pipeline);

        return users;
    } catch (error) {
        throw new Error(`Error searching users: ${error.message}`);
    }

}


const userLogin = async(emailOrphone,password)=>{
    try{

        const user = await User.findOne({ $or: [{ email: emailOrphone }, { phone: emailOrphone }] }).select('+password');

        const JWT_SECRET = process.env.JWT_SECTRET;

        let correctUser = await bcrypt.compare(password, password)

        const token = await jwt.sign({
            id: user._id,
            email: user.email,
            name: user.name,
            phone: user.phone
        },JWT_SECRET,
    { expiresIn: '1h' });

 resizeBy.status(200).json(token)
        
    }catch(e){
        throw new Error(`Error logging in user: ${e.message}`);
    }
}



module.exports = {
    createUserService,
    updateUser,
    softDelete,
    updatePassword,
    getUsers,
    userLogin
 
};

