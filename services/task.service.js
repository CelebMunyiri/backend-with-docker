const { Task} = require('../models')

const createTaskService = async(body)=>{
    try{
        const task = new Task(body)
        await task.save()
        return task;
    }catch(err){
        throw new Error('Failed to create task')
    }
}

const getAllTasks = async()=>{
    try{
        const tasks = await Task.find({is_deleted: false})
        return tasks;
    }catch(err){
        throw new Error('Failed to get all tasks')
    }
}

module.exports = {
    createTaskService
}