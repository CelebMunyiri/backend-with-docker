const { taskController} = require('../controllers')

const express = require('express')

const router = express.Router()

const validate = require('../middlewares/validate')
const {taskValidator} = require('../validators')


router.get('/', taskController.getAllTasks)
router.post('/', validate(taskValidator.createTask), taskController.createTask)

module.exports = router;