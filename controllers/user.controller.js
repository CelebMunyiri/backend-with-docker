const  {userService} = require('../services');
const catchAsync = require('../utils/catchAsync');

const createUser = catchAsync( async(req,res)=>{
    const user = await userService.createUser(req.body);
    res.status(201).json({
        status:'success',
        data: {
            user
        }
    });
})

const updateUser = catchAsync( async(req,res)=>{
    const user = await userService.updateUser(req.params.id, req.body);
    res.status(200).json({
        status:'success',
        data: {
            user
        }
    });
})


module.exports = {
    createUser,
    updateUser,
 };
