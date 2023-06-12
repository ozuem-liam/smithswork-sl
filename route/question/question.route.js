const express = require("express");
const Sender = require("../../model/sender.model");
const { validateCourierQuestionnaireSchema, validateUserQuestionnaireSchema } = require("../../validation");
const httpStatus = require("http-status");
const Community = require("../../model/community.mode");
const ApiError = require("../../middleware/error");

const router = express.Router();

router.post("/sender", async (req, res, next) => {
  const { error } = validateCourierQuestionnaireSchema(req.body);
  if (error)
    return next(new ApiError(httpStatus.BAD_REQUEST, error.details[0].message));

  const {
    gender,
    email,
    location,
    age,
    scale,
    qualification,
    listLocation,
    weight,
    plans,
    pickupAndDropoff,
    enteredAddress,
    enteredCompensation,
    notes,
  } = req.body;
  const message = new Sender();
  message.gender = gender;
  message.email = email;
  message.location = location;
  message.age = age;
  message.scale = scale;
  message.qualification = qualification;
  message.listLocation = listLocation;
  message.weight = weight;
  message.plans = plans;
  message.pickupAndDropoff = pickupAndDropoff;
  message.enteredAddress = enteredAddress;
  message.enteredCompensation = enteredCompensation;
  message.notes = notes;

  await message.save();

  res.status(httpStatus.OK).json({
    code: httpStatus.OK,
    message: "Sender answers was successfully saved",
    data: message,
  });
});

router.get("/sender", async (req, res, next) => {
  const messages = await Sender.find({});

  res.status(httpStatus.OK).json({
    code: httpStatus.OK,
    message: "Sender answers was successfully fetched",
    data: messages,
  });
});

router.post("/community", async (req, res, next) => {
  const { error } = validateUserQuestionnaireSchema(req.body);
  if (error)
    return next(new ApiError(httpStatus.BAD_REQUEST, error.details[0].message));

  const {
    gender,
    email,
    location,
    age,
    scale,
    qualification,
    packageSize,
    need,
    items,
    urgency,
    newCourier,
    enteredConcerns,
    notes,
  } = req.body;
  const message = new Community();
  message.gender = gender;
  message.email = email;
  message.location = location;
  message.age = age;
  message.scale = scale;
  message.qualification = qualification;
  message.packageSize = packageSize;
  message.need = need;
  message.items = items;
  message.urgency = urgency;
  message.newCourier = newCourier;
  message.enteredConcerns = enteredConcerns;
  message.notes = notes;

  await message.save();

  res.status(httpStatus.OK).json({
    code: httpStatus.OK,
    message: "Community courier  answers was successfully saved",
    data: message,
  });
});

router.get("/community", async (req, res, next) => {
  const messages = await Community.find({});

  res.status(httpStatus.OK).json({
    code: httpStatus.OK,
    message: "Community courier  answers was successfully fetched",
    data: messages,
  });
});

module.exports = router;
