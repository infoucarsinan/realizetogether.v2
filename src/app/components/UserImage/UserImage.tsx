import React from "react";
import styles from "./UserImage.module.css";

type UserImageProps = {
  imageSrc: string;
  isCurrentUser?: boolean;
  className?: string;
};

function UserImage({
  imageSrc,
  isCurrentUser = false,
  className,
}: UserImageProps): JSX.Element {
  return (
    <img
      src={imageSrc}
      className={`${className} ${styles.userImage} ${
        isCurrentUser ? styles.currentUser : ""
      }`}
    />
  );
}

export default UserImage;
