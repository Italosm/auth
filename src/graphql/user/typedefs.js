import { gql } from 'apollo-server-core';

export const userTypeDefs = gql`
  type Query {
    user(email: String!): User!
    users: [User!]!
  }
  type User {
    id: ID!
    email: String!
    passwordHash: String!
  }
`;
