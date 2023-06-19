import { ProductId } from "./arrowOverview.type";

export type CartProduct = {
  [productId: ProductId]: {
    amount: number;
  };
};

export type Cart = {
  variantOptions: {
    [key: string]: string;
  };
  accessories: CartProduct;
  additionalItems: CartProduct;
};
