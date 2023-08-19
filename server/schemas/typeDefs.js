const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        email: String!
        address: String
        phone: String
        messagesFromUser: [Message]
        apptInfo: Appt
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
    }

    type Mutation {
        addUser(name: String!, email: String!, password: String!): Auth
        addAdmin(name: String!, password: String!): adminAuth
        userLogin(email: String!, password: String!): Auth
        adminLogin(name: String!, password: String!): adminAuth
        addMessage(userId: ID!, text: String!): Message
        addAppt(userId: ID!, type: String!, time: String!): Appt
        assignAdmin(userId: ID!, apptId: ID!, adminId: ID): Appt
        updateAppt(userId: ID!, apptId: ID!, type: String, time: String): Appt
        markMessageAsRead(userId: ID!, messageId: ID!): Message
        deleteAppt(userId: ID!, apptId: ID!): User
        deleteMessage(userId: ID!, messageId: ID!): User
       }
`;

module.exports = typeDefs;