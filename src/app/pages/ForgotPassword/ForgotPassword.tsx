import React, { useState } from "react";
import styles from "./ForgotPassword.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import BackButton from "../../components/BackButton/BackButton";
import RealizeTogetherIcon from "../../components/Icons/IdeaIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";

function ForgotPasswordForm(): JSX.Element {
  const [email, setEmail] = useState("");

  return (
    <div className={styles.forgotPasswordForm}>
      <div className={styles.forgotPasswordForm__header}>
        <BackButton className={styles.backButton} />
        <RealizeTogetherIcon />
        <h1 className={styles.forgotPasswordForm__main__title}>
          Realize Together
        </h1>
      </div>
      <main className={styles.main}>
        <footer className={styles.forgotPasswordForm__footer}>
          <h4 className={styles.forgotPasswordForm__ForgotPasswordTitle}>
            Forgot password?
          </h4>
          <p>
            Enter the email address you used to create your account and we will
            email you a link to reset your password
          </p>
        </footer>
        <form className={styles.forgotPasswordForm__main}>
          <Input
            icon={<FontAwesomeIcon icon={faAt} />}
            placeholder="E-Mail"
            type="email"
            required={true}
            value={email}
            onChange={setEmail}
          ></Input>
          <Button>Send e-mail</Button>
        </form>
      </main>
    </div>
  );
}

export default ForgotPasswordForm;
