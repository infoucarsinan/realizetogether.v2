import React from "react";
import UserImage from "../UserImage/UserImage";
import styles from "./MessagePreview.module.css";

export type MessagePreviewProps = {
  userFirstName: string;
  userLastName: string;
  message: string;
  className?: string;
  imageSrc: string;
  icon?: JSX.Element;
};

function MessagePreview({
  userFirstName,
  userLastName,
  message,
  className,
  imageSrc,
  icon,
}: MessagePreviewProps): JSX.Element {
  return (
    <div className={`${styles.container} ${className}`}>
      <UserImage imageSrc={imageSrc} className={styles.userImage} />
      <h4>
        {userFirstName} {userLastName}
      </h4>
      <p>
        {message} {icon}
      </p>
    </div>
  );
}

export default MessagePreview;
