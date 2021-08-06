import React from "react";
import InfoIcon from "../Icons/InfoIcon";
import styles from "./About.module.css";

export type AboutProps = {
  className?: string;
};

function About({ className }: AboutProps): JSX.Element {
  return (
    <div className={`${styles.container} ${className}`}>
      <InfoIcon />
      <h2>About</h2>
    </div>
  );
}

export default About;
