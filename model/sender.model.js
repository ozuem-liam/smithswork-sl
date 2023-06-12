const { model, Schema } = require('mongoose');

const senderSchema = new Schema(
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
        listLocation: {
            type: String,
            required: false,
        },
        weight: {
            type: String,
            required: false,
        },
        plans: {
            type: String,
            required: false,
        },
        pickupAndDropoff: {
            type: String,
            required: false,
        },
        enteredAddress: {
            type: String,
            required: false,
        },
        enteredCompensation: {
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

const Sender = model('Sender', senderSchema);
module.exports = Sender;