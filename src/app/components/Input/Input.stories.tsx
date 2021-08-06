import React from "react";
import Input from "./Input";

export default {
  title: "Component/Input",
  component: Input,
};

export const email = (): JSX.Element => (
  <Input placeholder="E-Mail" value="" onChange={console.log} />
);
