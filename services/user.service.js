const {User} = require('../models')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const createUserService = async(body)=>{
        const user = new User(body)

        user.password = bcrypt.hashSync(body.password,6)
        
        await user.save()
   
        return user;

}

const updateUser = async(id,body)=>{
const user = await User.findByIdAndUpdate(id,body)
}

module.exports = {
    createUserService,
    updateUser,
 
};

