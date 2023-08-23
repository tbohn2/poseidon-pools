import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!, $address: String!, $phone: String!) {
    addUser(name: $name, email: $email, password: $password, address: $address, phone: $phone) {
      token
      user {
        _id
      }
    }
  }
`

export const ADD_ADMIN = gql`
  mutation addAdmin($name: String!, $username: String!, $password: String!) {
    addAdmin(name: $name, username: $username, password: $password) {
      token
      admin {
        _id
        name
      }
    }
  }
`

export const ADD_APPT = gql`
  mutation addAppt($userId: ID!, $type: String!, $time: String!) {
    addAppt(userId: $userId, type: $type, time: $time) {
      _id
      name
    }
  }
`

export const USER_LOGIN = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`

export const ADMIN_LOGIN = gql`
  mutation adminLogin($name: String!, $password: String!) {
    adminLogin(name: $name, password: $password) {
      token
      admin {
        _id
        name
      }
    }
  }
`

export const ASSIGN_SERVICER = gql`
  mutation assignAdmin($apptId: ID!, $adminId: ID!) {
    assignAdmin(apptId: $apptId, adminId: $adminId) {
      _id
      time
      type
      servicer {
        name
      }
    }
  }
`

export const UPDATE_APPT = gql`
  mutation updateAppt($apptId: ID!, $type: String, $time: String) {
    updateAppt(apptId: $apptId, type: $type, time: $time) {
      _id
      time
      type
      servicer {
        name
      }
    }
  }
`

export const DELETE_USER = gql`
  mutation deleteUser($userId: ID!) {
    deleteUser(userId: $userId) {
      _id
      name
    }
  }
`

export const DELETE_APPT = gql`
  mutation deleteAppt($userId: ID!, $apptId: ID!) {
    deleteAppt(userId: $userId, apptId: $apptId) {
      _id
      name
    }
  }
`

export const DELETE_ADMIN = gql`
  mutation deleteAdmin($adminId: ID!) {
    deleteAdmin(adminId: $adminId) {
      name
    }
  }
`