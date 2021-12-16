import express from "express";
import { ApolloServer } from "apollo-server-express";
import depthLimit from "graphql-depth-limit";
import { createServer } from "http";
import compression from "compression";
import cors from "cors";
import { Sequelize } from "sequelize-typescript";
require("dotenv").config();

import schema from "./schema";

const sequelize = new Sequelize({
  database: "dashboard",
  dialect: "mysql",
  host:"127.0.0.1",
  username: "root",
  password: "mk159753",
  port: 3306,
  define:{
    timestamps:false
  },
  models: [__dirname + "/models"],
  modelMatch: (filename, member) => {
    return (
      filename.substring(0, filename.indexOf(".model")) === member.toLowerCase()
    );
  }
});

sequelize.authenticate().then(() => {
  console.log("db connected succesfully");
});

const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)]
});

app.use("*", cors());
app.use(compression());
server.applyMiddleware({ app, path: "/graphql" });

const httpServer = createServer(app);

httpServer.listen({ port: 80 }, (): void => console.log("server start"));
