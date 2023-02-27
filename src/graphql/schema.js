import { gql } from 'apollo-server-core';
import { userTypeDefs } from './user/typedefs';
import { userResolvers } from './user/resolvers';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => {
      return true;
    },
  },
};

export const typeDefs = [rootTypeDefs, userTypeDefs];
export const resolvers = [rootResolvers, userResolvers];
