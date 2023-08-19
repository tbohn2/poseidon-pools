const mongoose = require('mongoose');

const { Schema, model } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function (value) {
                return /\S+@\S+\.\S+/.test(value);
            },
            message: props => `${props.value} is not a valid email address!`,
        },
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    address: {
        type: String,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
        validate: {
            validator: function (value) {
                return /^[0-9]{10}$/.test(value);
            },
            message: props => `${props.value} is not a valid phone number!`,
        },
    },
    messagesFromUser: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Message'
        }
    ],
    apptInfo:
    {
        type: Schema.Types.ObjectId,
        ref: 'Appt',
    },

});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
