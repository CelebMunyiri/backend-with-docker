const { taskService } = require('../services')

const catchAsync = require('../utils/catchAsync')

const createTask = catchAsync(async(req,res)=>{
    const task = await taskService.createTask(req.body)
    res.status(201).json({
        status:'success',
        success:true,
        data: {
            task
        }
    })
})

const getAllTasks = catchAsync(async(req,res)=>{
    const tasks = await taskService.getAllTasks()
    res.status(200).json({
        status:'success',
        success:true,
        data: {
            tasks
        }
    })
})


module.exports = {
    createTask,
    getAllTasks,
 
}