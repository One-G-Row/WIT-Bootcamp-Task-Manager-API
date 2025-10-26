const Task = require('../models/Task')

exports.getAllTasks = async(req, res, next) => {
    try{
        const tasks = await Task.find().sort({createdAt: -1})//sort by newest
        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        })
    } catch(err){
        next(err)
    }
}


exports.getATask = async(req, res, next) => {
    try{
        const task = await Task.findById(req.params.id)
         
        if(!task){
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            })
        }

        res.status(200).json({
            success: true,
            data: task
        })
    }catch(err){
        next(err)
    }
}

exports.postTask = async(req, res, next) => {
    try{
        const task = await Task.create(req.body)
    
        res.status(201).json({
            success: true,
            data: task
        })
    }catch(err){
        next(err)
    }
}

exports.updateTask = async(req, res, next) => {
    try{
         const task = await Task.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            {
            new: true, // Return updated document
            runValidators: true // Run schema validators
         })

         if(!task){
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            })
         }
    }catch(err){
        next(err)
    }
}

exports.deleteTask = async(req, res, next) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id)

        if(!task){
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            })
        }

        res.status(200).json({
            success: true,
            message: 'Task deleted successfully',
            data: {}
        })
    }catch(err){
        next(err)
    }
}
