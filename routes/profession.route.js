const { professionController} = require('../controllers')

const { professionValidators} = require('../validators')

const validate = require('../middlewares/validate');

const express = require('express')

const router = express.Router()

router.get('/', professionController.getAllProfessions)

router.post('/', validate(professionValidators.createProfession), professionController.createProfession)

module.exports = router;


