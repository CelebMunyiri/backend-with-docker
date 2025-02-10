const Joi = require('joi');

const createTask = {
    body:Joi.object().keys({
        title: Joi.string().required().max(40),
        description: Joi.string().required(),
        profession:Joi.string().required().max(20),
    })
}

module.exports = { createTask }