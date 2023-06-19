import { ComponentStory, ComponentMeta } from "@storybook/react";
import LanguageDecorator from "../../../testing/decorators/config/config";

import { Price } from "./Price";

export default {
  title: "atoms/Price",
  component: Price,
  decorators: [LanguageDecorator],
} as ComponentMeta<typeof Price>;

export const Default: ComponentStory<typeof Price> = (args) => (
  <Price
    {...args}
    price={{
      amount: 10,
      currency: "EUR",
    }}
  />
);

export const USDPrice: ComponentStory<typeof Price> = (args) => (
  <Price
    {...args}
    price={{
      amount: 10,
      currency: "USD",
    }}
  />
);
