const {
  ApolloServer
} = require('apollo-server');
import { typeDefs } from './schema';
import { resolvers } from './resolvers';
import { createConnection } from 'typeorm';

let connection: any;

(async () => {
  connection = await createConnection();
})();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  connection
});

server.listen().then(({
  url
}) => {
  console.log(`🚀 Server ready at ${url}`);
});
