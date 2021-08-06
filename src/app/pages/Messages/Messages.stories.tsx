import React from "react";
import { Meta } from "@storybook/react";
import Messages from "./Messages";

export default {
  title: "Page/Messages",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const MessagesMessages = (): JSX.Element => <Messages />;
