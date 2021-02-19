import React from "react";
import { storiesOf } from "@storybook/react";
import "./styles.css";
// Import seperate story for each component
import { CircleIndicator } from "../components/circle-indicator";

const stories = storiesOf("App Test", module);
// Build Preview
stories.add("App", () => {
  return (
    <CircleIndicator
      indicatorsToShow={[
        { state: "on" },
        { state: "broken" },
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
