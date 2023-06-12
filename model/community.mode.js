const { model, Schema } = require('mongoose');

const communitySchema = new Schema(
    {
        gender: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: false,
        },
        age: {
            type: String,
            required: false,
        },
        scale: {
            type: String,
            required: false,
        },
        qualification: {
            type: String,
            required: false,
        },
        packageSize: {
            type: String,
            required: false,
        },
        need: {
            type: String,
            required: false,
        },
        items: {
            type: String,
            required: false,
        },
        urgency: {
            type: String,
            required: false,
        },
        newCourier: {
            type: String,
            required: false,
        },
        enteredConcerns: {
            type: String,
            required: false,
        },
        notes: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
    },
);

const Community = model('Community', communitySchema);
module.exports = Community;