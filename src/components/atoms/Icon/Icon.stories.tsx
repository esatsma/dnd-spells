import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon } from "./Icon";

export default {
  title: "atoms/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: { type: "text" },
      defaultValue: "arrow-right",
    },
  },
} as ComponentMeta<typeof Icon>;

export const Default: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args} />
);
