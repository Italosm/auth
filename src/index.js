import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      msg: 'Hello World',
    };
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
