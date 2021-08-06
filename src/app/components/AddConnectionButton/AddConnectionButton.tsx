import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./AddConnectionButton.module.css";

function AddConnectionButton(): JSX.Element {
  return (
    <button className={styles.addConnectionIcon}>
      <FontAwesomeIcon icon={faUserPlus} />
    </button>
  );
}

export default AddConnectionButton;
