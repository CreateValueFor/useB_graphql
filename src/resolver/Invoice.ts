import { Op } from 'sequelize'
import { Invoice } from '../models/invoice.model'

interface IFilter {
  apidate: string
  company: string
  page: number
  limit: number
  isSent: string
  billing_date: string
}

const _getItems = async (
  apidate: string = 'all',
  company: string = 'all',
  page: string = '1',
  offset: string = '20',
  isSent: string = 'all',
  billing_date: string = 'all'
) => {
  const invoices = await Invoice.findAll({
    order: [['apidate', 'DESC']],
  })
  return invoices
}

// get invoice resolver
// TODO : need to change isSent type to String | Boolean
// TODO : failed caused by graphql multiple types
const get_invoices = async (
  _: void,
  args: IFilter = {
    apidate: 'all',
    company: 'all',
    page: 0,
    limit: 20,
    isSent: 'all',
    billing_date: 'all',
  }
) => {
  const { apidate, company, page, limit, isSent, billing_date } = args

  let where = {}
  let offset = 0
  let count = 20

  if (apidate) {
    where = {
      ...where,
      apidate,
    }
  }

  if (company) {
    where = {
      ...where,
      userid: company,
    }
  }

  if (page === undefined) {
    offset = 0
  }

  if (page !== 0) {
    if (page && limit) {
      offset = limit * page
    }
  }
  console.log(limit)
  if (limit === undefined) {
  }

  if (page || limit) {
    if (page && limit) {
      count = limit
      offset = page * count
    } else if (page) {
      offset = page * count
    } else if (limit) {
      count = limit
      offset = 0
    } else {
      console.log(page, limit, 'something wrong')
    }
  } else {
    offset = 0
  }

  if (isSent !== undefined) {
    if (isSent == 'true') {
      where = {
        ...where,
        [Op.not]: [{ sentdate: null }],
      }
    } else {
      where = {
        ...where,
        sentdate: null,
      }
    }
  }

  //TODO connect company table
  if (billing_date !== 'all') {
    if (billing_date === 'early') {
      // where ={
      //   billing_date:{
      //     $between: []
      //   }
      // }
    }
  }

  const invoices = await Invoice.findAll({
    offset,
    limit: count,
    where,
    order: [['apidate', 'DESC']],
  })

  return invoices
}

export { get_invoices }
