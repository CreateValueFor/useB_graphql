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

  const managers = await Company.findAll({
    include: [User],
    where,
  })
  return managers
}

// mutations
// 회사 추가
const add_company = async (
  _: void,
  args: { companyName: string; domain: string }
) => {
  const { companyName, domain } = args

  const newCompany = await Company.create({
    company: companyName,
    domain: domain,
  })

  return newCompany

  console.log(companyName, domain)
}

export { get_companys, companys, companyManager, add_company }
