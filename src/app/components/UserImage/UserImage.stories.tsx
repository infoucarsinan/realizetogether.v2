import React from "react";
import UserImage from "./UserImage";

export default {
  title: "Component/UserImage",
  component: UserImage,
};

export const User = (): JSX.Element => <UserImage imageSrc={"./User.jpeg"} />;
export const CurrentUser = (): JSX.Element => (
  <UserImage imageSrc={"./User.jpeg"} isCurrentUser={true} />
);
