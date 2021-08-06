import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import UserImage from "../UserImage/UserImage";
import styles from "./ProjectIdea.module.css";

export type ProjectIdeaProps = {
  userImageSrc: string;
  userName: string;
  projectIdeaTitle: string;
  projectIdeaDescription: string;
  className?: string;
};

function ProjectIdea({
  userImageSrc,
  userName,
  projectIdeaTitle,
  projectIdeaDescription,
  className,
}: ProjectIdeaProps): JSX.Element {
  return (
    <div className={`${styles.container} ${className}`}>
      <UserImage imageSrc={userImageSrc} className={styles.userImage} />
      <h4 className={styles.userName}>{userName}</h4>
      <h4 className={styles.container__title}>{projectIdeaTitle}</h4>
      <p className={styles.container__description}>
        {projectIdeaDescription} <FontAwesomeIcon icon={faArrowRight} />
      </p>
    </div>
  );
}

export default ProjectIdea;
