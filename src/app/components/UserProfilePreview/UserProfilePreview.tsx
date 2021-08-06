import React from "react";
import UserImage from "../UserImage/UserImage";
import styles from "./UserProfilePreview.module.css";

export type UserProfilePreviewProps = {
  userFirstName: string;
  userLastName: string;
  userDescription: string;
  className?: string;
  imageSrc: string;
};

function UserProfilePreview({
  userFirstName,
  userLastName,
  userDescription,
  className,
  imageSrc,
}: UserProfilePreviewProps): JSX.Element {
  return (
    <div className={`${styles.container} ${className}`}>
      <UserImage imageSrc={imageSrc} className={styles.userImage} />
      <h4 className={styles.userName}>
        {userFirstName} {userLastName}
      </h4>
      <p className={styles.userDescription}>{userDescription}</p>
    </div>
  );
}

export default UserProfilePreview;
