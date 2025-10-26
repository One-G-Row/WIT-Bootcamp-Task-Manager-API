const express = require('express')
const router = express.Router()

const {
    getAllTasks,
    getATask,
    postTask,
    updateTask,
    deleteTask
} = require('../controllers/taskController')

router.route('/')
.get(getAllTasks)
.post(postTask)

router.route('/:id')
.get(getATask)
.put(updateTask)
.delete(deleteTask)

module.exports = router