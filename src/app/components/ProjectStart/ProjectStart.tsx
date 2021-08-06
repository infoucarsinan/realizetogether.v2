import React from "react";
import EditButtonIcon from "../Icons/EditButtonIcon";
import styles from "./ProjectStart.module.css";

function ProjectStart(): JSX.Element {
  return (
    <div className={styles.container}>
      <h4>Start</h4>
      <div className={styles.editButton}>
        <EditButtonIcon />
      </div>
      <p>
        A start date is not yet known. The start depends on everyone involved
        and is negotiable.
      </p>
    </div>
  );
}

export default ProjectStart;
