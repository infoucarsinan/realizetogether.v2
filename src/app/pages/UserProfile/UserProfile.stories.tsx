import React from "react";
import UserProfile from "./UserProfile";
import { Meta } from "@storybook/react";

export default {
  title: "Page/UserProfile",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const UserProfileUser = (): JSX.Element => <UserProfile />;
