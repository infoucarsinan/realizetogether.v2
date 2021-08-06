import React from "react";
import styles from "./ViewUserProfile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBuilding,
  faGlobe,
  faAt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { User } from "../../../types";

export type ViewUserProfileProps = {
  user: User;
};

function ViewUserProfile({ user }: ViewUserProfileProps): JSX.Element {
  return (
    <div className={styles.viewUserProfile}>
      <div className={styles.userNameDescription}>
        <h3 className={styles.userName}>
          {user.firstName + " " + user.lastName}
        </h3>
        <h4 className={styles.userDescription}>{user.userDescription}</h4>
      </div>
      <div className={styles.container}>
        <FontAwesomeIcon icon={faHome} />
        <p>{user.userAddress}</p>
        <FontAwesomeIcon icon={faBuilding} />
        <p>{user.userEmployer}</p>
        <FontAwesomeIcon icon={faAt} />
        <p>{user.email}</p>
        <FontAwesomeIcon icon={faGlobe} />
        <p>{user.userWebsite}</p>
        <FontAwesomeIcon icon={faPhone} />
        <p>{user.userPhoneNumber}</p>
      </div>
    </div>
  );
}

export default ViewUserProfile;
