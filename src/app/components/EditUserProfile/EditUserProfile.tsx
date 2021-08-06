import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Input from "../Input/Input";
import styles from "./EditUserProfile.module.css";
import {
  faHome,
  faBuilding,
  faGlobe,
  faAt,
  faPhone,
  faUserCircle,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import useMutation from "../../hooks/useMutation";
import { updateUser } from "../../utils/api";
import { User } from "../../../types";

export type EditUserProfileProps = {
  loggedUser: User;
  handleEditModeChange: (status: boolean) => void;
};

function EditUserProfile({
  loggedUser,
  handleEditModeChange,
}: EditUserProfileProps): JSX.Element {
  const [firstName, setFirstName] = useState(loggedUser.firstName);
  const [lastName, setLastName] = useState(loggedUser.lastName);
  const [userDescription, setUserDescription] = useState(
    loggedUser.userDescription
  );
  const [userAddress, setUserAddress] = useState(loggedUser.userAddress);
  const [userEmployer, setUserEmployer] = useState(loggedUser.userEmployer);
  const [email, setEmail] = useState(loggedUser.email);
  const [userWebsite, setUserWebsite] = useState(loggedUser.userWebsite);
  const [userPhoneNumber, setUserPhoneNumber] = useState(
    loggedUser.userPhoneNumber
  );

  const { mutate, isLoading, errorMessage } = useMutation(updateUser, {
    onSuccess: () => {
      handleEditModeChange(false);
    },
  });
  const [validationErrorMessage, setValidationErrorMessage] = useState<
    string | null
  >(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setValidationErrorMessage(null);

    const user: User = {
      firstName,
      lastName,
      userDescription,
      userAddress,
      userEmployer,
      email,
      userWebsite,
      userPhoneNumber,
    };
    mutate(user);
  }

  return (
    <>
      <main>
        <form className={styles.container} onSubmit={handleSubmit}>
          <FontAwesomeIcon icon={faUserCircle} />
          <Input
            placeholder={"First name"}
            value={firstName}
            type="string"
            onChange={(value) => setFirstName(value)}
            className={styles.input}
          />
          <FontAwesomeIcon icon={faUserCircle} />

          <Input
            placeholder={"Last name"}
            value={lastName}
            type="string"
            onChange={(value) => setLastName(value)}
            className={styles.input}
          />
          <FontAwesomeIcon icon={faFileAlt} />

          <Input
            placeholder={"User Description"}
            value={userDescription === undefined ? "" : userDescription}
            type="string"
            onChange={(value) => setUserDescription(value)}
            className={styles.input}
          />
          <FontAwesomeIcon icon={faHome} />

          <Input
            placeholder={"User Address"}
            value={userAddress === undefined ? "" : userAddress}
            type="string"
            onChange={(value) => setUserAddress(value)}
            className={styles.input}
          />
          <FontAwesomeIcon icon={faBuilding} />

          <Input
            placeholder={"User Employer"}
            value={userEmployer === undefined ? "" : userEmployer}
            type="string"
            onChange={(value) => setUserEmployer(value)}
            className={styles.input}
          />
          <FontAwesomeIcon icon={faAt} />

          <Input
            placeholder={"User Email Address"}
            value={email}
            type="string"
            onChange={(value) => setEmail(value)}
            className={styles.input}
            disabled={true}
          />
          <FontAwesomeIcon icon={faGlobe} />

          <Input
            placeholder={"User Website"}
            value={userWebsite === undefined ? "" : userWebsite}
            type="string"
            onChange={(value) => setUserWebsite(value)}
            className={styles.input}
          />
          <FontAwesomeIcon icon={faPhone} />

          <Input
            placeholder={"User Phone Number"}
            value={userPhoneNumber === undefined ? "" : userPhoneNumber}
            type="string"
            onChange={(value) => setUserPhoneNumber(value)}
            className={styles.input}
          />
          <div className={styles.okButtonContainer}>
            <Button disabled={isLoading}>OK</Button>
            {(errorMessage || validationErrorMessage) && (
              <div className={styles.registerForm__error}>
                Error: {errorMessage || validationErrorMessage}
              </div>
            )}
          </div>
        </form>
      </main>
    </>
  );
}

export default EditUserProfile;
