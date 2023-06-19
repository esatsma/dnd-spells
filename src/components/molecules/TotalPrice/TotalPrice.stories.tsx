import { ComponentStory, ComponentMeta } from "@storybook/react";
import ConfigDecorator from "../../../testing/decorators/config/config";

import { TotalPrice } from "./TotalPrice";

export default {
  title: "atoms/TotalPrice",
  component: TotalPrice,
  decorators: [ConfigDecorator],
  argTypes: {
    label: {
      control: { type: "text" },
      defaultValue: "Totale prijs",
    },
    prependPrice: {
      control: { type: "text" },
      defaultValue: "Totale prijs",
    },
    price: {
      control: { type: "object" },
      defaultValue: {
        amount: 10,
        currency: "EUR",
      },
    },
    vatPrice: {
      control: { type: "object" },
      defaultValue: {
        amount: 10,
        currency: "USD",
      },
    },
    textAlign: {
      options: ["left", "right"],
      control: { type: "select" },
      defaultValue: "left",
    },
  },
} as ComponentMeta<typeof TotalPrice>;

export const Default: ComponentStory<typeof TotalPrice> = (args) => (
  <TotalPrice {...args} />
);

export const USDTotalPrice: ComponentStory<typeof TotalPrice> = (args) => (
  <TotalPrice
    price={{ amount: 1000, currency: "USD" }}
    vatPrice={{ amount: 2000, currency: "USD" }}
    prependPrice="Totale Prijs"
  />
);
