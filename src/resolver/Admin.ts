import Admin from '../controller/admin'

const admins = async (_: void, args: void) => {
  return await Admin.getItems()
}

export { admins }
