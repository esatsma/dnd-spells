import { Price } from "./price.type";

export type ArrowVariant = {
  series?: string;
  name: string;
  subtitle?: string;
  productImage: string;
  price: Price;
  priceWithoutVAT: Price;
  productId: string;
  variantOptions: {
    [key: string]: string;
  };
};

export type ProductId = string;

export type ArrowOverviewItem = {
    id: number;
    locale: string;
    name: string;
    articleNumber: string;
    subtitle?: string;
    series?: string;
    description?: string;
    attributeBullets?: string;
    productImage: string;
    arrowingConfigurator: boolean;
    attributes: ArrowOverviewAttributes;
    variants: ArrowOverviewItemVariants[];
  };
  
  export type ArrowOverviewAttributes = {
    [key: string]: ArrowOverviewAttributeObject;
  };
  
  export type ArrowOverviewAttributeObject = {
    attributeId: number;
    type: string;
    name: string;
    code: string;
    value: string | number | string[];
    label: string;
  };
  
  export type ArrowOverviewItemVariants = {
    productId: number;
    variantName: string;
    articleNumber: string;
    attributes: ArrowOverviewAttributes;
  };
  