const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    getWelcome: String
  }
  `);

const root = {
  getWelcome: () => {
    return 'Welcome to GraphQL';
  }
};

// Instantiate express
const app = express();

// Create an Express route for /graphql
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema, // user our schema
    rootValue: root, // user our resolver
    graphiql: true // use GraphQL's built-in GUI
  })
);
app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');
