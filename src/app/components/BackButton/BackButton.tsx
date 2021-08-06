import React from "react";
import { useHistory } from "react-router-dom";
import BackButtonIcon from "../Icons/BackButtonIcon";
import styles from "./BackButton.module.css";

export type BackButtonProps = {
  className?: string;
};

function BackButton({ className }: BackButtonProps): JSX.Element {
  const history = useHistory();

  return (
    <button
      className={`${styles.backButton} ${className}`}
      onClick={() => history.goBack()}
    >
      <BackButtonIcon />
    </button>
  );
}

export default BackButton;
