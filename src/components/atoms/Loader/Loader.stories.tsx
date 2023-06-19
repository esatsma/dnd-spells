import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Loader } from "./Loader";

export default {
  title: "atoms/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

export const Default: ComponentStory<typeof Loader> = (args) => <Loader />;
