const Joi = require('joi');

const createTask = {
    body:Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        profession:Joi.string().required(),
    })
}

module.exports = { createTask }