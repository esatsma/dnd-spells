import * as React from "react";
import { composeStories } from "@storybook/testing-react";
import { mount } from "@cypress/react18";
import * as stories from "./Emblem.stories";

// compile the "Primary" story with the library
const { WithText } = composeStories(stories);

it("Should render the emblem", () => {
  mount(<WithText />);

  cy.contains("Mi");
});
