import Price from "./price.type";
import { ProductId } from "./arrowOverview.type";

export type AdditionData = {
  price: Price;
  priceWithoutVAT: Price;
  items: ProductItem[];
};

export type ProductItem = {
  productId: ProductId;
  productImage?: string;
  articleNumber: string;
  amount?: number;
  series?: string;
  name: string;
  subtitle?: string;
  price: Price;
  priceWithoutVAT: Price;
  description?: string;
};
