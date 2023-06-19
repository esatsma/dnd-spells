import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Emblem } from "./Emblem";

export default {
  title: "atoms/Emblem",
  component: Emblem,
  argTypes: {
    children: {
      control: { type: "text" },
      defaultValue: "Mi",
    },
  },
} as ComponentMeta<typeof Emblem>;

export const Default: ComponentStory<typeof Emblem> = (args) => (
  <Emblem {...args} />
);

export const WithText: ComponentStory<typeof Emblem> = (args) => (
  <Emblem>Mi</Emblem>
);
