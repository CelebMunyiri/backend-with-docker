const Joi = require('joi');

const createUserValidator =({
    username:Joi.string().required().maxLength(30).minLength(10),
    email: Joi.string().required().email(),
    password: Joi.string().required().minLength(8).maxLength(20),
    confirmPassword: Joi.ref('password'),
   
})

const updateUserValidator =({
    username: Joi.string().optional().maxLength(30).minLength(10),
    email: Joi.string().optional().email(),
})


module.exports = {
    createUserValidator,
    updateUserValidator,
};