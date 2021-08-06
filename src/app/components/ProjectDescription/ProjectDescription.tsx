import React from "react";
import EditButtonIcon from "../Icons/EditButtonIcon";
import styles from "./ProjectDescription.module.css";

export type ProjectDescriptionProps = {
  projectIdeaDescriptionTitle: string;
  projectIdeaDescription: string | JSX.Element;
  className?: string;
};

function ProjectDescription({
  projectIdeaDescriptionTitle,
  projectIdeaDescription,
  className,
}: ProjectDescriptionProps): JSX.Element {
  return (
    <div className={`${styles.container} ${className}`}>
      <h4 className={styles.container__title}>{projectIdeaDescriptionTitle}</h4>
      <div className={styles.editButton}>
        <EditButtonIcon />
      </div>
      <p className={styles.container__description}>{projectIdeaDescription}</p>
    </div>
  );
}

export default ProjectDescription;
