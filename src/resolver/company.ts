import { Op } from 'sequelize'
import { Company } from '../models/company.model'

// get invoice resolver
// TODO : need to change isSent type to String | Boolean
// TODO : failed caused by graphql multiple types
const companys = async (_: void) => {
  const companys = await Company.findAll()
  return companys
}

const get_companys = async (_: void) => {
  const companys = await Company.findAll({
    order: [['company', 'DESC']],
  })

  return companys
}

export { get_companys, companys }
