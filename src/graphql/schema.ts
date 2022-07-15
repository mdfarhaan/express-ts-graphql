import { gql } from "apollo-server-express";

const typeDefs = gql`
  type users {
    name: String
    id: String
  }

  type Query {
    users: users
  }
`;

export default typeDefs;
