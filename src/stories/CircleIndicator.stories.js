import React from "react";
import { storiesOf } from "@storybook/react";
import "./styles.css";
// Import component to be made in Storybook
// Seperate story for each component
import { CircleIndicator } from "../components/circle-indicator";

const stories = storiesOf("App Test", module);

// Function which renders the component you are building
stories.add("App", () => {
  return (
    <CircleIndicator
      indicatorsToShow={[
        { state: "on" },
        { state: "on" },
        { state: "broken" },
        { state: "broken" },
        { state: "off" },
        { state: "broken" },
        { state: "broken" },
        { state: "on" },
      ]}
    />
  );
});
