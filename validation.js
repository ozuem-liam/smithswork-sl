const Joi = require('joi');

const validateUserQuestionnaireSchema = (payload) => {
    const schema = Joi.object({
        gender: Joi.string().required(),
        email: Joi.string().email().required(),
        location: Joi.string().required(),
        age: Joi.string().required(),
        scale: Joi.string().optional(),
        qualification: Joi.string().required(),
        packageSize: Joi.string().required(),
        need: Joi.string().required(),
        items: Joi.string().required(),
        urgency: Joi.string().required(),
        newCourier: Joi.string().required(),
        enteredConcerns: Joi.string().required(),
        notes: Joi.string().required(),
    }); 
    
    return schema.validate(payload);
} 

const validateCourierQuestionnaireSchema = (payload) => {
    const schema = Joi.object({
        gender: Joi.string().required(),
        email: Joi.string().email().required(),
        location: Joi.string().required(),
        age: Joi.string().required(),
        scale: Joi.string().optional(),
        qualification: Joi.string().required(),
        listLocation: Joi.string().required(),
        weight: Joi.string().required(),
        plans: Joi.string().required(),
        pickupAndDropoff: Joi.string().required(),
        enteredAddress: Joi.string().required(),
        enteredCompensation: Joi.string().required(),
        notes: Joi.string().required(),
    }); 
    
    return schema.validate(payload);
} 

module.exports = {validateUserQuestionnaireSchema, validateCourierQuestionnaireSchema};
