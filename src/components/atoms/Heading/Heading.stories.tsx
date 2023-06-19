import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Heading } from "./Heading";

export default {
  title: "atoms/Heading",
  component: Heading,
  argTypes: {
    heading: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: "select" },
      defaultValue: "false",
    },
    line: {
      control: { type: "boolean" },
      defaultValue: true,
    },
    children: {
      control: { type: "text" },
      defaultValue: "Heading",
    },
  },
} as ComponentMeta<typeof Heading>;

export const Default: ComponentStory<typeof Heading> = (args) => (
  <>
    <Heading {...args} heading={1}>
      Heading 1
    </Heading>
    <Heading {...args} heading={2}>
      Heading 2
    </Heading>
    <Heading {...args} heading={3}>
      Heading 3
    </Heading>
    <Heading {...args} heading={4}>
      Heading 4
    </Heading>
    <Heading {...args} heading={5}>
      Heading 5
    </Heading>
    <Heading {...args} heading={6}>
      Heading 6
    </Heading>
  </>
);

export const Heading1: ComponentStory<typeof Heading> = (args) => (
  <Heading heading={1} line={false}>
    Heading 1
  </Heading>
);

export const Heading2: ComponentStory<typeof Heading> = (args) => (
  <Heading heading={2} line={false}>
    Heading 2
  </Heading>
);

export const Heading3: ComponentStory<typeof Heading> = (args) => (
  <Heading heading={3} line={false}>
    Heading 3
  </Heading>
);

export const Heading4: ComponentStory<typeof Heading> = (args) => (
  <Heading heading={4} line={false}>
    Heading 4
  </Heading>
);

export const Heading5: ComponentStory<typeof Heading> = (args) => (
  <Heading heading={5} line={false}>
    Heading 5
  </Heading>
);

export const Heading6: ComponentStory<typeof Heading> = (args) => (
  <Heading heading={6} line={false}>
    Heading 6
  </Heading>
);

export const LinedHeading: ComponentStory<typeof Heading> = (args) => (
  <>
    <Heading heading={1} line={true}>
      Heading 1
    </Heading>
    <Heading heading={2} line={true}>
      Heading 2
    </Heading>
    <Heading heading={3} line={true}>
      Heading 3
    </Heading>
    <Heading heading={4} line={true}>
      Heading 4
    </Heading>
    <Heading heading={5} line={true}>
      Heading 5
    </Heading>
    <Heading heading={6} line={true}>
      Heading 6
    </Heading>
  </>
);
