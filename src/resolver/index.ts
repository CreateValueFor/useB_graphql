import { IResolvers } from "graphql-tools";
import { admins } from "./Admin";
import {invoices} from "./Invoice"

const resolverMAP: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `hello wolrd!`;
    },

    // Admin
    admins,
    invoices
  }
};

export default resolverMAP;
