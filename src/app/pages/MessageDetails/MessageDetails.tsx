import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MessagePreview from "../../components/MessagePreview/MessagePreview";
import NavBar from "../../components/NavBar/NavBar";
import SearchField from "../../components/SearchField/SearchField";
import UserProfilePreview from "../../components/UserProfilePreview/UserProfilePreview";
import styles from "./MessageDetails.module.css";

function MessageDetails(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.topFix}>
        <SearchField
          className={styles.searchField}
          placeholderText="Realize Together"
          icon={<FontAwesomeIcon icon={faSearch} />}
        />
      </div>
      <div className={styles.header}>
        <h1 className={styles.header__title}>Message</h1>
        <UserProfilePreview
          className={styles.userProfilePreview}
          imageSrc="./Nuan.jpeg"
          userFirstName="Nuan"
          userLastName="Kiper"
          userDescription="Screen designer"
        />
      </div>
      <div className={styles.underContainer}>
        <div className={`${styles.right} ${styles.secondaryBackgroundColor}`}>
          <MessagePreview
            imageSrc="./Nuan.jpeg"
            className={`${styles.leftContent} `}
            userFirstName="Nuan"
            userLastName="Kiper"
            message="Hello! How are you? I have a direct question for you. I would like to work with you, but currently I have very little time. How rushing are you!"
          />
        </div>
        <div className={`${styles.left} ${styles.tertiaryBackgroundColor}`}>
          <MessagePreview
            imageSrc="./Natalia.jpeg"
            className={`${styles.leftContent} `}
            userFirstName="Natalia"
            userLastName="Alvarez"
            message="Hello Nuan, we are not in too much 
            of a hurry, only we are almost 
            complete and would like to skip the 
            concept phase. If you really want to 
            participate, we are of course waiting
            for you."
          />
        </div>
      </div>
      <NavBar className={styles.navBar} isMessagesPage={true} />
    </div>
  );
}

export default MessageDetails;
