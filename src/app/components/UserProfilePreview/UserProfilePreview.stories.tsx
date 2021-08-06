import React from "react";
import UserProfilePreview from "./UserProfilePreview";

export default {
  title: "Component/UserProfilePreview",
  component: UserProfilePreview,
};

export const UserProfilePreviewUser = (): JSX.Element => (
  <UserProfilePreview
    imageSrc="./User.jpeg"
    userFirstName="Natalie"
    userLastName="Alvarez"
    userDescription="Cinema is life itself"
  />
);
