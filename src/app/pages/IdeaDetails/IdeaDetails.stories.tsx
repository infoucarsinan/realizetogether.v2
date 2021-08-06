import React from "react";
import { Meta } from "@storybook/react";
import IdeaDetails from "./IdeaDetails";

export default {
  title: "Page/IdeaDetails",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const IdeaDetailsIdea = (): JSX.Element => <IdeaDetails />;
