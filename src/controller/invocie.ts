import { Invoice } from "../models/invoice.model";

const dummyInvoices = () => {
    return [
        {
            id: 1,
            userid:"woghks08@gmail.com",
            apidate:"202111",
            ocr_total: 312,
            ocr_invalid:12,
            ocr_month_calls:5000,
            ocr_month_fee : 300000
        }
    ]
}

const getItems = async () => {
  const invoices = await Invoice.findAll();
  return invoices;
};

export default { getItems };
