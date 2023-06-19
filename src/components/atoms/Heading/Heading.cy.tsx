import * as React from "react";
import { composeStories } from "@storybook/testing-react";
import { mount } from "@cypress/react18";
import * as stories from "./Heading.stories";

// compile the "Primary" story with the library
const { Heading1, LinedHeading } = composeStories(stories);

it("Should render the Heading", () => {
  mount(<Heading1 />);

  cy.contains("Heading");
});

it("Should render the Heading with a line", () => {
  mount(<LinedHeading />);

  cy.get("h1").then(($els) => {
    const win = $els[0].ownerDocument.defaultView;
    const after = win?.getComputedStyle($els[0], "after");

    const contentValue = after?.getPropertyValue("background-color");
    expect(contentValue).to.eq("rgb(226, 0, 26)");
  });

  cy.contains("Heading");
});
