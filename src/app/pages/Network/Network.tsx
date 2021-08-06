import { faSearch, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchField from "../../components/SearchField/SearchField";
import UserProfilePreview from "../../components/UserProfilePreview/UserProfilePreview";
import styles from "./Network.module.css";

function Idea(): JSX.Element {
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
        <FontAwesomeIcon icon={faUserFriends} className={styles.messagesIcon} />
        <h1 className={styles.header__title}>My network</h1>
      </div>
      <div className={styles.underContainer}>
        <div className={`${styles.right} ${styles.secondaryBackgroundColor}`}>
          <a href="/userprofile/Asime">
            <UserProfilePreview
              imageSrc="./Asime.jpeg"
              className={`${styles.rightContent} `}
              userFirstName="Asime"
              userLastName="Nileper"
              userDescription="Playful ways of life"
            />
          </a>
        </div>
        <div className={`${styles.right} ${styles.tertiaryBackgroundColor}`}>
          <UserProfilePreview
            imageSrc="./John.jpeg"
            className={`${styles.rightContent} `}
            userFirstName="John"
            userLastName="Aker Olamu"
            userDescription="Things are dancing around"
          />
        </div>
        <div className={`${styles.right} ${styles.secondaryBackgroundColor}`}>
          <a>
            <UserProfilePreview
              imageSrc="./Jansen.jpeg"
              className={`${styles.rightContent} `}
              userFirstName="Jansen"
              userLastName="Lecvire"
              userDescription="Musician with different priorities"
            />
          </a>
        </div>
        <div className={`${styles.right} ${styles.tertiaryBackgroundColor}`}>
          <UserProfilePreview
            imageSrc="./Tyson.jpeg"
            className={`${styles.rightContent} `}
            userFirstName="Tyson"
            userLastName="Koleme"
            userDescription="I have a dream"
          />
        </div>
        <div className={`${styles.right} ${styles.secondaryBackgroundColor}`}>
          <a>
            <UserProfilePreview
              imageSrc="./Ken.jpeg"
              className={`${styles.rightContent} `}
              userFirstName="Ken"
              userLastName="Alcerie"
              userDescription="Photographer distances me from some"
            />
          </a>
        </div>
      </div>
      <NavBar className={styles.navBar} isNetworkPage={true} />
    </div>
  );
}

export default Idea;
