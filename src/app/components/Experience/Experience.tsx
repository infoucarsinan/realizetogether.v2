import React from "react";
import ExperienceIcon from "../Icons/ExperienceIcon";
import styles from "./Experience.module.css";

export type ExperienceProps = {
  className?: string;
};
function Experience({ className }: ExperienceProps): JSX.Element {
  return (
    <div className={`${styles.container} ${className}`}>
      <ExperienceIcon />
      <h2>Experience</h2>
    </div>
  );
}

export default Experience;
