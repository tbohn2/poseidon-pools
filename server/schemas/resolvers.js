const { User, Admin, Message, Appt } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('messagesFromUser').populate('apptInfo');
        },
        user: async (parent, { _id }) => {
            return User.findOne({ _id }).populate('messagesFromUser').populate('apptInfo');
        },
        admins: async () => {
            return Admin.find();
        },
        admin: async (parent, { _id }) => {
            return Admin.findOne({ _id });
        },
    },
    Mutation: {
        addUser: async (parent, { name, email, password }) => {
            const user = await User.create({ name, email, password });
            const token = signToken(user);
            return { token, user };
        }
    }
};