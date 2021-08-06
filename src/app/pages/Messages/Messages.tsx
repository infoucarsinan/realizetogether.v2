import { faArrowRight, faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MessagePreview from "../../components/MessagePreview/MessagePreview";
import NavBar from "../../components/NavBar/NavBar";
import SearchField from "../../components/SearchField/SearchField";
import styles from "./Messages.module.css";

function Messages(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.topFix}>
        <SearchField
          className={styles.searchField}
          placeholderText="Realize Together"
        />
      </div>
      <div className={styles.header}>
        <FontAwesomeIcon icon={faComments} className={styles.messagesIcon} />
        <h1 className={styles.header__title}>My messages</h1>
      </div>
      <div className={styles.underContainer}>
        <div className={`${styles.left} ${styles.secondaryBackgroundColor}`}>
          <a href="/messagedetails" className={`${styles.leftContent}`}>
            <MessagePreview
              icon={<FontAwesomeIcon icon={faArrowRight} />}
              imageSrc="./Nuan.jpeg"
              userFirstName="Nuan"
              userLastName="Kiper"
              message="Hello! How are you? I have a direct question for you. I would like to work with you, but currently I have very little time. How rushing are you!"
            />
          </a>
        </div>
        <div className={`${styles.left} ${styles.tertiaryBackgroundColor}`}>
          <MessagePreview
            icon={<FontAwesomeIcon icon={faArrowRight} />}
            imageSrc="./John.jpeg"
            className={`${styles.leftContent}`}
            userFirstName="John"
            userLastName="Aker Olamu"
            message="Hello, to be completely honest, I thought first, look, maybe you will find something or not but I never thought it was so blatant ..."
          />
        </div>
        <div className={`${styles.left} ${styles.secondaryBackgroundColor}`}>
          <MessagePreview
            icon={<FontAwesomeIcon icon={faArrowRight} />}
            imageSrc="./Asime.jpeg"
            className={`${styles.leftContent} `}
            userFirstName="Asime"
            userLastName="Nileper"
            message="Hello, to be completely honest, I thought first, look, maybe you will find something or not but I never thought it was so blatant ..."
          />
        </div>
      </div>
      <NavBar className={styles.navBar} isMessagesPage={true} />
    </div>
  );
}

export default Messages;
