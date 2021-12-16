import { IResolvers } from "graphql-tools";
import { admins } from "./Admin";
import { get_invoices} from "./Invoice"

// declare resolver options
const resolverMAP: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `hello wolrd!`;
    },
    // Admin
    admins,
    get_invoices
  }
};

export default resolverMAP;
