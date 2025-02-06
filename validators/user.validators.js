const Joi = require('joi');

const createUserValidator ={
    body:Joi.object().keys({
    name:Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    role: Joi.string().required(),
    phone: Joi.string().required(),
    profession:Joi.string().required(),
    image: Joi.string(),
    gender: Joi.string(),
    service_offering: Joi.string().required(),
    tasks: Joi.array(),
    location: Joi.string().required(),
    confirmPassword: Joi.ref('password'),
   
})
}

const updateUserValidator = {
    body:Joi.object().keys({
        username: Joi.string().optional(),
    email: Joi.string().optional().email(),

    })
    
}

const updatePassword = {
    password: Joi.string().required(),
}


module.exports = {
    createUserValidator,
    updateUserValidator,
    updatePassword
};