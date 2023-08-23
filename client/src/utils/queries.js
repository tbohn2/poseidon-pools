import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      name
      apptInfo {
        _id
        time
        type
        servicer {
          _id
          name
        }
      }
    }
  }
`

export const QUERY_USER = gql`
  query user($id: ID!) {
    user(_id: $id) {
    address
    email
    name
    phone
    apptInfo {
      _id
      time
      type
      servicer {
        name
       }
     }
    }
  }
`;

export const QUERY_ADMIN = gql`
  query admin($id: ID!) {
    admin(_id: $id) {
      _id
      name
    }
  }
`

export const QUERY_ADMINS = gql`
  query Query {
    admins {
      _id
      name
    }
  }
`

