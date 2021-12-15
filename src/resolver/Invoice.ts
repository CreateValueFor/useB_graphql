import Invoice from "../controller/invocie";

const invoices = async (_: void, args: void) => {
  return await Invoice.getItems();
};

export { invoices };
