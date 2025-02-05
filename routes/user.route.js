const express = require('express');
const validate = require('../middlewares/validate');

const router = express.Router();

const {userValidators} = require('../validators')

const {userController} = require('../controllers')

router.get('/', userController.getUsers)

router.post('/', validate(userValidators.createUserValidator), userController.createUser)

router.patch('/:id', userController.updateUser)
router.put('/id/delete', userController.softDelete)
router.put('/id/update-password', validate(userValidators.updatePassword), userController.updatePassword)

module.exports = router;