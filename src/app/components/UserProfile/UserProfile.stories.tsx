import React from "react";
import { User } from "../../../types";
import UserProfile from "./UserProfile";

export default {
  title: "Component/UserProfile",
  component: UserProfile,
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

export const ProfileUser = (): JSX.Element => (
  <UserProfile user={user} setIsUserEdited={() => true} isCurrentUser={false} />
);
