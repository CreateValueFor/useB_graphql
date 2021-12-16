import { importSchema } from "graphql-import";

import { makeExecutableSchema } from "graphql-tools";
import { GraphQLSchema } from "graphql";

import resolvers from "./resolver";

// schema 불러오기
const typeDefs = importSchema(__dirname + "/schema/schema.graphql");
// graphql schema 와 resolver연결
const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers
});

export default schema;
