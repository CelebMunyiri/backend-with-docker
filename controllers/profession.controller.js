const { professionService} = require('../services')

const catchAsync = require('../utils/catchAsync');

const createProfession = catchAsync( async(req,res)=>{
    const profession = await professionService.createProfession(req.body);
    res.status(201).json({
        status:'success',
        success:true,
        data: {
            profession
        }
    });
})

const getAllProfessions = catchAsync(async(req,res)=>{
    const professions = await professionService.getAllProfessions();
    res.status(200).json({
        status:'success',
        success:true,
        data: {
            professions
        }
    });
})
module.exports = { createProfession, getAllProfessions }