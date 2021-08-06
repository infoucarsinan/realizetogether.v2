import React from "react";
import CurrentUserProfile from "./CurrentUserProfile";
import { Meta } from "@storybook/react";

export default {
  title: "Page/CurrentUserProfile",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const CurrentUserProfileCurrent = (): JSX.Element => (
  <CurrentUserProfile />
);
