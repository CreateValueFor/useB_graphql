import { Op } from 'sequelize'
import { User } from '../models/user.model'

// get invoice resolver
// TODO : need to change isSent type to String | Boolean
// TODO : failed caused by graphql multiple types
const users = async (_: void) => {
  const users = await User.findAll()
  return users
}

export { users }
