const Joi = require('joi');

const validateQuestionnaireSchema = (payload) => {
    const schema = Joi.object({
        gender: Joi.string().required(),
        email: Joi.string().email().required(),
        income: Joi.string().required(),
        age: Joi.string().required(),
        travel_frequency: Joi.string().optional(),
        q1: Joi.string().required(),
        q2: Joi.string().required(),
        q3: Joi.string().required(),
        q4: Joi.string().required(),
        q5: Joi.string().required(),
        notes: Joi.string().required(),
    }); 
    
    return schema.validate(payload);
} 

module.exports = validateQuestionnaireSchema;
