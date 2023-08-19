const { User, Admin, Message, Appt } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('messagesFromUser').populate('apptInfo').populate({
                path: 'apptInfo',
                populate: { path: 'admin' }
            });;
        },
        user: async (parent, { _id }) => {
            return User.findOne({ _id }).populate('messagesFromUser').populate('apptInfo').populate({
                path: 'apptInfo',
                populate: { path: 'admin' }
            });
        },
        admins: async () => {
            return Admin.find();
        },
        admin: async (parent, { _id }) => {
            return Admin.findOne({ _id });
        },
    },
    Mutation: {
        addUser: async (parent, { name, email, password, address, phone }) => {
            const user = await User.create({ name, email, password, address, phone });
            const token = signToken(user);
            return { token, user };
        },
        addAdmin: async (parent, { username, password }) => {
            const admin = await Admin.create({ username, password });
            const token = signToken(admin);
            return { token, admin };
        },
        userLogin: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('User does not exist');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect password');
            }
            const token = signToken(user);
            return { token, user };
        },
        adminLogin: async (parent, { username, password }) => {
            const admin = await Admin.findOne({ username });
            if (!admin) {
                throw new AuthenticationError('Username does not exist');
            }
            const correctPw = await admin.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect password');
            }
            const token = signToken(admin);
            return { token, admin };
        },
        addMessage: async (parent, { userId, text }) => {
            const message = await Message.create({ text });
            return User.findOneAndUpdate(
                { _id: userId },
                { $addToSet: { messagesFromUser: message }, },
                { new: true, runValidators: true, }
            );
        },
        respondMessage: async (parent, { userId, text }) => {
            const message = await Message.create({ text });
            return User.findOneAndUpdate(
                { _id: userId },
                { $addToSet: { messagesToUser: message }, },
                { new: true, runValidators: true, }
            );
        },
        addAppt: async (parent, { userId, type, time }) => {
            const appt = await Appt.create({ type, time });
            return User.findOneAndUpdate(
                { _id: userId },
                { $addToSet: { apptInfo: appt }, },
                { new: true, runValidators: true, }
            );
        },
        assignAdmin: async (parent, { apptId, adminId }) => {
            return Appt.findOneAndUpdate(
                { _id: apptId },
                { $set: { admin: adminId }, },
                { new: true, runValidators: true, }
            );
        },
        updateAppt: async (parent, { apptId, type, time }) => {
            return Appt.findOneAndUpdate(
                { _id: apptId },
                { $set: { type, time }, },
                { new: true, runValidators: true, }
            );
        },
        markMessageAsRead: async (parent, { userId, messageId }) => {
            const readMessage = await Message.findOneAndUpdate(
                { _id: messageId },
                { $set: { read: true }, },
                { new: true, runValidators: true, }
            );
            return User.findOneAndUpdate(
                { _id: userId },
                { $pull: { messagesFromUser: messageId }, $set: { messagesFromUser: readMessage }, },
                { new: true, runValidators: true, }
            );
        },
        deleteMessage: async (parent, { userId, messageId }) => {
            const removedMessage = await Message.findOneAndDelete({ _id: messageId },);
            return User.findOneAndUpdate(
                { _id: userId },
                { $pull: { messagesFromUser: removedMessage }, },
                { new: true, runValidators: true, }
            );
        },
        deleteAppt: async (parent, { userId, apptId }) => {
            const removedAppt = await Appt.findOneAndDelete({ _id: apptId },);
            return User.findOneAndUpdate(
                { _id: userId },
                { $pull: { apptInfo: removedAppt }, },
                { new: true, runValidators: true, }
            );
        },
    }
};