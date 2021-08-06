import React from "react";
import EditButton from "./EditButton";

export default {
  title: "Component/EditButton",
  component: EditButton,
};

export const EditToButton = (): JSX.Element => <EditButton />;
export const test = (): JSX.Element => <EditButton disabled={true} />;
