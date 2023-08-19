const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const apptSchema = new Schema({
    type: {
        type: String,
        required: true,
        trim: true,
    },
    time: {
        type: String,
        required: true,
        trim: true,
    },
    servicer: {
        type: Schema.Types.ObjectId,
        ref: 'Admin',
    },

});

const Appt = model('Appt', apptSchema);

module.exports = Appt;
