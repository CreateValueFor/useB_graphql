import { IResolvers } from 'graphql-tools'
import { admins } from './Admin'
import { get_invoices } from './Invoice'
import { get_companys, companys } from './company'
import { users } from './User'

// declare resolver options
const resolverMAP: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `hello wolrd!`
    },
    // Admin
    admins,
    get_invoices,
    get_companys,
    companys,
    users,
  },
}

export default resolverMAP
