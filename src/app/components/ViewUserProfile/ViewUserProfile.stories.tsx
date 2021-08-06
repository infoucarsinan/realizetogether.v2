import React from "react";
import ViewUserProfile from "./ViewUserProfile";
import { User } from "../../../types";

export default {
  title: "Component/ViewUserProfile",
  component: ViewUserProfile,
};

const user: User = {
  firstName: "Test name",
  lastName: "Test nachname",
  userDescription: "Test Desc user",
  userAddress: "Test adres",
  email: "test@test.de",
  userEmployer: "Test Employer",
  userPhoneNumber: "1234567",
  userWebsite: "wwww.testter.de",
};

export const UserProfileView = (): JSX.Element => (
  <ViewUserProfile user={user} />
);
