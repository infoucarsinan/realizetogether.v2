import React from "react";
import EditButtonIcon from "../Icons/EditButtonIcon";
import styles from "./ProjectGoals.module.css";

function ProjectGoals(): JSX.Element {
  return (
    <div className={styles.container}>
      <h4>Goals</h4>
      <div className={styles.editButton}>
        <EditButtonIcon />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut.
      </p>
    </div>
  );
}

export default ProjectGoals;
