const Joi = require('joi');

const createProfession = {
    body:Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        field:Joi.string().required(),
    })
}

module.exports = { createProfession }