const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        email: String!
        address: String!
        phone: String!
        messagesFromUser: [Message]
        messagesToUser: [Message]
        apptInfo: [Appt]
    }

    type Admin {
        _id: ID!
        name: String!
    }

    type Auth {
        token: ID!
        user: User
    }
    
    type adminAuth {
        token: ID!
        admin: Admin
    }

    type Message {
        _id: ID!
        text: String!
        time: String!
        read: Boolean!
    }

    type Appt {
        _id: ID!
        type: String!
        time: String!
        servicer: Admin
    }

    type Query {
        users: [User]
        user(_id: ID!): User
        admins: [Admin]
        admin(_id: ID!): Admin
        messages: [Message]
        appts: [Appt]
    }

    type Mutation {
        addUser(name: String!, email: String!, password: String!, address: String!, phone: String!): Auth
        addAdmin(name: String!, username: String!, password: String!): adminAuth
        addAppt(userId: ID!, type: String!, time: String!): User
        addMessage(userId: ID!, text: String!): Message
        userLogin(email: String!, password: String!): Auth
        adminLogin(name: String!, password: String!): adminAuth
        respondMessage(userId: ID!, text: String!): Message
        assignAdmin(apptId: ID!, adminId: ID!): Appt
        updateAppt(apptId: ID!, type: String, time: String): Appt
        markMessageAsRead(userId: ID!, messageId: ID!): Message
        deleteUser(userId: ID!): User
        deleteAdmin(adminId: ID!): Admin
        deleteAppt(userId: ID!, apptId: ID!): User
        deleteMessage(userId: ID!, messageId: ID!): User
       }
`;

module.exports = typeDefs;