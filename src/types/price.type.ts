export type Price = {
  amount: number;
  currency: Intl.NumberFormatOptions["currency"];
};

export type TotalPrice = {
  price: Price;
  priceWithoutVAT: Price;
};

export default Price;
