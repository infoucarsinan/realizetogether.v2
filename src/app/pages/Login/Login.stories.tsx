import React from "react";
import Login from "./Login";
import { Meta } from "@storybook/react";

export default {
  title: "Page/Login",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const LoginPage = (): JSX.Element => <Login />;
