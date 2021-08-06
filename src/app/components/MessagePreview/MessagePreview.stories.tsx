import React from "react";
import MessagePreview from "./MessagePreview";

export default {
  title: "Component/MessagePreview",
  component: MessagePreview,
};

export const MessagePreviewUser = (): JSX.Element => (
  <MessagePreview
    userFirstName="Firstname"
    userLastName="Lastname"
    message="Message......"
    imageSrc="./User.jpeg"
  />
);
