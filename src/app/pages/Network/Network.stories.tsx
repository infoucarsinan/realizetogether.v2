import React from "react";
import { Meta } from "@storybook/react";
import Network from "./Network";

export default {
  title: "Page/Network",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const NetworkNetwork = (): JSX.Element => <Network />;
