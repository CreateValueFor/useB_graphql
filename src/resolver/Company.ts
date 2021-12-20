import { Op, where } from 'sequelize'
import { Company } from '../models/company.model'
import { User } from '../models/user.model'

// get invoice resolver
// TODO : need to change isSent type to String | Boolean
// TODO : failed caused by graphql multiple types
const companys = async (_: void) => {
  const companys = await Company.findAll()
  console.log(companys)
  return companys
}

const get_companys = async (_: void) => {
  const companys = await Company.findAll({
    include: [User], // User 객체를 들고온다.
    order: [['company', 'DESC']],
  })

  return companys
}
const companyManager = async (_: void, args: { companyName: string }) => {
  const { companyName } = args
  let where = {
    company: companyName,
  }
  console.log(where)
  const managers = await Company.findAll({
    include: [User],
    where,
  })
  return managers
}

export { get_companys, companys, companyManager }
