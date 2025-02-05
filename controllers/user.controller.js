const  {userService} = require('../services');
const catchAsync = require('../utils/catchAsync');

const createUser = catchAsync( async(req,res)=>{
    const user = await userService.createUserService(req.body);
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

const softDelete = catchAsync(async(req,res)=>{

    const user = await userService.softDelete(req.params.id);
    res.status(200).json({
        status:'success',
        success:true,
        data: {
            user
        }
    });

})

const updatePassword = catchAsync( async(req,res)=>{
    const password = req.body.password;
    const user = await userService.updatePassword(req.params.id, password);
    res.status(200).json({
        status:'success',
        sucess:true,
        data: {
            user
        }
    });
})

const getUsers = catchAsync(async(req,res)=>{
    try{
        const query = req.query.query

        const users = await userService.getUsers(query);
        res.status(200).json({
            status:'success',
            success:true,
            data: {
                users
            }
        });

    }catch(err){
        return res.status(500).json({success:false,message:err.message});
    }
})


module.exports = {
    createUser,
    updateUser,
    softDelete,
    updatePassword,
    getUsers
 };
