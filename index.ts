const {
  ApolloServer
} = require('apollo-server');
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { createConnection } from 'typeorm';

(async () => {
  const connection = await createConnection();
})();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({
  url
}) => {
  console.log(`🚀 Server ready at ${url}`);
});
