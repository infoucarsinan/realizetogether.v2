import React from "react";
import UserName from "./UserName";

export default {
  title: "Component/UserName",
  component: UserName,
};

export const NoName = (): JSX.Element => (
  <UserName firstName="Firstname" lastName="Lastname" />
);

export const SinanUçar = (): JSX.Element => (
  <UserName firstName="Sinan" lastName="Uçar" />
);
