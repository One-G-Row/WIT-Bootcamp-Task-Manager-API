const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Task title is required']
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
    }
})

module.exports = mongoose.model('Task', TaskSchema)