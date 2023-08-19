const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const messageSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        required: true,
        default: Date.now,
    },
    read: {
        type: Boolean,
        required: true,
    }
});

const Message = model('Message', messageSchema);

module.exports = Message;
