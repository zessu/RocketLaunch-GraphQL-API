const {
  ApolloServer
} = require('apollo-server');
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { createConnection } from 'typeorm';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

createConnection().then(() => {
  server.listen().then(({
    url
  }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})
