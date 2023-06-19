import * as React from "react";
import { composeStories } from "@storybook/testing-react";
import { mount } from "@cypress/react18";
import * as stories from "./TotalPrice.stories";

// compile the "Primary" story with the library
const { USDTotalPrice } = composeStories(stories);

xit("Should render the price in euros", () => {
  mount(<USDTotalPrice />);

  cy.contains("Totale Prijs$ 10,00");
  cy.contains("$ 20,00 Incl. btw");
});
