import React, { useState } from "react";
import styles from "./Register.module.css";
import { User } from "../../../types";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import BackButton from "../../components/BackButton/BackButton";
import ProfilePictureIcon from "../../components/Icons/ProfilePictureIcon";
import useMutation from "../../hooks/useMutation";
import { useHistory } from "react-router-dom";
import { postUser, uploadProfilePicture } from "../../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import UserImage from "../../components/UserImage/UserImage";

function RegisterForm(): JSX.Element {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { mutate, isLoading, errorMessage } = useMutation(postUser, {
    onSuccess: () => {
      history.push("/currentuserprofile");
    },
  });
  const [validationErrorMessage, setValidationErrorMessage] = useState<
    string | null
  >(null);
  const [imgSrc, setImgSrc] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setValidationErrorMessage(null);
    if (password != confirmPassword) {
      setValidationErrorMessage("Password did not match");
      return;
    }

    const user: User = { email, firstName, lastName, password, imgSrc };
    mutate(user);
  }

  async function handlePictureUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const pictureFile = event.target.files?.item(0);
    if (!pictureFile) {
      return;
    }
    const picturePath = await uploadProfilePicture(pictureFile);
    setImgSrc(picturePath.secure_url);
    console.log(picturePath.secure_url);
  }

  return (
    <div className={styles.mainContainer}>
      <header className={styles.registrationForm__header}>
        <BackButton className={styles.backButton} />
        <h1 className={styles.loginForm__main__titel}>Realize Together</h1>
        <label className={styles.imageUpload}>
          <input type="file" onChange={handlePictureUpload} />
          {imgSrc !== "" ? (
            <UserImage imageSrc={imgSrc} className={styles.userImage} />
          ) : (
            <ProfilePictureIcon />
          )}
          <p className={styles.loginForm__main__imagetitel}>
            Add profile picture
          </p>
        </label>
      </header>
      <main className={styles.main}>
        <form className={styles.registrationForm__main} onSubmit={handleSubmit}>
          <Input
            icon={<FontAwesomeIcon icon={faUser} />}
            placeholder="First name"
            type="text"
            required={true}
            value={firstName}
            onChange={setFirstName}
          ></Input>
          <Input
            icon={<FontAwesomeIcon icon={faUser} />}
            placeholder="Last name"
            type="text"
            required={true}
            value={lastName}
            onChange={setLastName}
          ></Input>
          <Input
            icon={<FontAwesomeIcon icon={faAt} />}
            placeholder="E-Mail"
            type="email"
            required={true}
            value={email}
            onChange={setEmail}
          ></Input>
          <Input
            icon={<FontAwesomeIcon icon={faLockOpen} />}
            placeholder="Password"
            type="password"
            required={true}
            value={password}
            onChange={setPassword}
          ></Input>
          <Input
            icon={<FontAwesomeIcon icon={faLockOpen} />}
            placeholder="Confirm Password"
            type="password"
            required={true}
            value={confirmPassword}
            onChange={setConfirmPassword}
          ></Input>
          <Button disabled={isLoading}>Register</Button>
          {(errorMessage || validationErrorMessage) && (
            <div className={styles.registerForm__error}>
              Error: {errorMessage || validationErrorMessage}
            </div>
          )}
        </form>
      </main>
    </div>
  );
}

export default RegisterForm;
