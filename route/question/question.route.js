const express = require('express');
const Sender = require('../../model/sender.model')
const validateQuestionnaireSchema = require('../../validation');
const httpStatus = require('http-status');
const Community = require('../../model/community.mode');
const ApiError = require('../../middleware/error');

const router = express.Router();

router.post('/sender', async  (req, res, next) => {
    const { error } = validateQuestionnaireSchema(req.body);
    if (error) return next(new ApiError(httpStatus.BAD_REQUEST, error.details[0].message));

    const { gender, email, income, age, travel_frequency, q1, q2, q3, q4, q5, notes } = req.body;
    const message = new Sender();
    message.gender = gender; 
    message.email = email; 
    message.income = income; 
    message.age = age; 
    message.travel_frequency = travel_frequency; 
    message.q1 = q1; 
    message.q2 = q2; 
    message.q3 = q3; 
    message.q4 = q4; 
    message.q5 = q5; 
    message.notes = notes; 

    await message.save();

    res.status(httpStatus.OK).json({
        code: httpStatus.OK,
        message: 'Sender answers was successfully saved',
        data: message,
      });
});

router.post('/community', async  (req, res, next) => {
    const { error } = validateQuestionnaireSchema(req.body);
    if (error) return next(new ApiError(httpStatus.BAD_REQUEST, error.details[0].message));

    const { gender, email, income, age, travel_frequency, q1, q2, q3, q4, q5, notes } = req.body;
    const message = new Community();
    message.gender = gender; 
    message.email = email; 
    message.income = income; 
    message.age = age; 
    message.travel_frequency = travel_frequency; 
    message.q1 = q1; 
    message.q2 = q2; 
    message.q3 = q3; 
    message.q4 = q4; 
    message.q5 = q5; 
    message.notes = notes; 

    await message.save();

    res.status(httpStatus.OK).json({
        code: httpStatus.OK,
        message: 'Community courier  answers was successfully saved',
        data: message,
      });
});

module.exports = router;