import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./WriteMessageButton.module.css";

function WriteMessageButton(): JSX.Element {
  return (
    <button className={styles.writeMessageButton}>
      <FontAwesomeIcon icon={faComments} />
    </button>
  );
}

export default WriteMessageButton;
