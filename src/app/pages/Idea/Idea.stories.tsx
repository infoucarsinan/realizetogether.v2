import React from "react";
import Idea from "./Idea";
import { Meta } from "@storybook/react";

export default {
  title: "Page/Idea",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const IdeaIdea = (): JSX.Element => <Idea />;
