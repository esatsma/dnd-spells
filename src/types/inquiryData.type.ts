import { ProductItem } from "./addition.type";
import Price from "./price.type";
import { ProductId } from "./arrowOverview.type";

export type ProductCartItems = {
  price: Price;
  priceWithoutVAT: Price;
  items: ProductItem[];
};

export type InquiryData = {
  product: {
    series?: string;
    name: string;
    subtitle?: string;
    price: Price;
    priceWithoutVAT: Price;
    productId: ProductId;
    productImage: string;
  };
  accessories: ProductCartItems;
  additions: ProductCartItems;
  productParts: {
    items: {
      productId: ProductId;
      amount: number;
      name: string;
    }[];
  };
  productSpecs: {
    label: string;
    value: string;
  }[];
  totalPrice: {
    price: Price;
    priceWithoutVAT: Price;
  };
};
