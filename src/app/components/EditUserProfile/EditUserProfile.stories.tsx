import React from "react";
import { User } from "../../../types";
import EditUserProfile from "./EditUserProfile";

export default {
  title: "Component/EditUserProfile",
  component: EditUserProfile,
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

export const EditUserPro = (): JSX.Element => (
  <EditUserProfile loggedUser={user} handleEditModeChange={() => false} />
);
