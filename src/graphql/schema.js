const { gql } = require("apollo-server-koa");

const typeDefs = gql`
  type Query {
    status: String
  }

  type Mutation {
    add(a: String!, b: String!): String
    subtract(a: String!, b: String!): String
    multiply(a: String!, b: String!): String
    divide(a: String!, b: String!): String
  }
`;

module.exports = typeDefs;
