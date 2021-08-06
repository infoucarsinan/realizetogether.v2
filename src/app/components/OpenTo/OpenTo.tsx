import React from "react";
import styles from "./OpenTo.module.css";

export type OpenToProps = {
  className?: string;
  title: string;
  description: string | JSX.Element;
  icon: JSX.Element;
};

function OpenTo({
  className,
  title,
  description,
  icon,
}: OpenToProps): JSX.Element {
  return (
    <div className={`${styles.container} ${className}`}>
      <span className={styles.icon}>{icon}</span>
      <h2 className={styles.openToTitle}>{title}</h2>
      <p className={styles.openToDescription}>{description}</p>
    </div>
  );
}

export default OpenTo;
