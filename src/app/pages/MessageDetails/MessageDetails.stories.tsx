import React from "react";
import { Meta } from "@storybook/react";
import MessageDetails from "./MessageDetails";

export default {
  title: "Page/MessageDetails",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const MessageDetailsMessage = (): JSX.Element => <MessageDetails />;
