import * as React from "react";
import { composeStories } from "@storybook/testing-react";
import { mount } from "@cypress/react18";
import * as stories from "./Price.stories";

// compile the "Primary" story with the library
const { USDPrice, Default } = composeStories(stories);

it("Should render the price in dollars", () => {
  mount(<USDPrice />);

  cy.contains("$ 0,10");
});

it("Should render the price in euros", () => {
  mount(<Default />);

  cy.contains("€ 0,10");
});
