import { Admin } from '../models/admin.model'
const getItems = async () => {
  const admins = await Admin.findAll()
  return admins
}

export default { getItems }
