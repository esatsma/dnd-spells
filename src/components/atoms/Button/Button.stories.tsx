import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon } from "../Icon/Icon";

import { Button } from "./Button";

export default {
  title: "atoms/Button",
  component: Button.Base,
  argTypes: {
    loading: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
} as ComponentMeta<typeof Button.Base>;

export const Default: ComponentStory<typeof Button.Base> = (args) => (
  <Button.Base {...args} onClick={() => alert("clicked on button")}>
    <Button.Text>An advanced button with children</Button.Text>
    <Button.Icon>
      <Icon name="arrow-right" />
    </Button.Icon>
  </Button.Base>
);

export const ButtonWithoutIcon: ComponentStory<typeof Button.Base> = (args) => (
  <Button.Base {...args} onClick={() => alert("clicked on button")}>
    <Button.Text>An advanced button with children</Button.Text>
  </Button.Base>
);

export const ButtonDisabled: ComponentStory<typeof Button.Base> = (args) => (
  <Button.Base disabled>A disabled button</Button.Base>
);

export const ButtonLoading: ComponentStory<typeof Button.Base> = (args) => (
  <Button.Base loading>A loading button</Button.Base>
);
