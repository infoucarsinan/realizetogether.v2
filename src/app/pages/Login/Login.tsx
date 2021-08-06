import React, { useState } from "react";
import styles from "./Login.module.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import RealizeTogetherIcon from "../../components/Icons/RealizeTogetherIcon";
import { Link, useHistory } from "react-router-dom";
import { User } from "../../../types";
import { postLoginUser } from "../../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLockOpen } from "@fortawesome/free-solid-svg-icons";

function LoginForm(): JSX.Element {
  const history = useHistory();
  const [email, setEmail] = useState("test@test.test");
  const [password, setPassword] = useState("test");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const user: Partial<User> = { email, password };
      await postLoginUser(user);
      history.push("/currentuserprofile");
    } catch (error) {
      setErrorMessage(error.toString());
    }
  }

  return (
    <div className={styles.loginForm}>
      <div className={styles.loginForm__header}>
        <RealizeTogetherIcon />
        <h1 className={styles.loginForm__main__titel}>Realize Together</h1>
      </div>
      <main className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.loginForm__main}>
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
            // required
          ></Input>
          <Button>Login</Button>
          {errorMessage && <div>Error: {errorMessage}</div>}
        </form>
        <footer className={styles.loginForm__footer}>
          <h4 className={styles.loginForm__ForgotPasswordTitel}>
            <Link to="/ForgotPassword">Forgot password?</Link>{" "}
          </h4>
          <p>Don’t have an account?</p>
          <h4 className={styles.loginForm_RegisterLink}>
            <Link to="/Register">Register</Link>
          </h4>
        </footer>
      </main>
    </div>
  );
}

export default LoginForm;
