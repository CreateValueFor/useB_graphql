

import {Op} from "sequelize"
import { Invoice } from "../models/invoice.model";

interface IFilter {
  apidate: string;
  company: string;
  page:number; 
  limit:number;
  isSent:string;
  billing_date:string;
}

const _getItems = async (apidate:string="all",company: string="all",page:string="1",offset:string="20", isSent:string = "all", billing_date:string = "all" ) => {
  
  const invoices = await Invoice.findAll({
      order:[
          ['apidate','DESC']
      ]
  });
  return invoices;
};

// get invoice resolver
// TODO : need to change isSent type to String | Boolean 
// TODO : failed caused by graphql multiple types
const get_invoices = async (_:void, args:IFilter={
  apidate:"all",
  company:"all",
  page:0,
  limit:20,
  isSent:"all",
  billing_date:"all"
}) => {
  const {apidate, company, page, limit, isSent, billing_date} = args;
  let where = {};
  let offset = 0;
  if(apidate !== "all"){
    where = {
      ...where,
      apidate
    }
  }
  if(company !== "all"){
    where = {
      ...where,
      userid:company
    }
  }
  if(page !== 0){
    offset = limit * page;
  }
  if(limit !== 20){
    
  }
  if(isSent !== "all"){
    if(isSent == "true"){
      where = {
        ...where,
        [Op.not]:[
          {sentdate: null}
        ]
      }
    }else{
      where = {
        ...where,
        sentdate:null
      }
    }
  }
  //TODO connect company table
  if(billing_date !== "all"){
    if(billing_date === "early"){
      // where ={
      //   billing_date:{
      //     $between: []
      //   }
      // }
    }
  }

  


  const invoices = await Invoice.findAll({
    offset,
    limit,
    where,
    order:[
      ['apidate','DESC'],
    ]
  })

  return invoices
};

export { get_invoices };
