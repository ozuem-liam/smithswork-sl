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
        income: {
            type: String,
            required: false,
        },
        age: {
            type: String,
            required: false,
        },
        travel_frequency: {
            type: String,
            required: false,
        },
        q1: {
            type: String,
            required: false,
        },
        q2: {
            type: String,
            required: false,
        },
        q3: {
            type: String,
            required: false,
        },
        q4: {
            type: String,
            required: false,
        },
        q5: {
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