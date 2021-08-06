import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import ProjectDescription from "../../components/ProjectDescription/ProjectDescription";
import SearchField from "../../components/SearchField/SearchField";
import UserProfilePreview from "../../components/UserProfilePreview/UserProfilePreview";
import styles from "./IdeaDetails.module.css";

function Idea(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.topFix}>
        <SearchField
          className={styles.searchField}
          placeholderText="Realize Together"
          icon={
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
          }
        />
      </div>
      <div className={styles.header}>
        <UserProfilePreview
          className={styles.userProfilePreview}
          imageSrc="./Natalia.jpeg"
          userFirstName="Natalia"
          userLastName="Alvarez"
          userDescription="Screenwriter"
        />
        <h1 className={styles.header__title}>A thriller where nothing…</h1>
      </div>
      <div className={styles.underContainer}>
        <div className={styles.right}>
          <ProjectDescription
            className={styles.rightContent}
            projectIdeaDescriptionTitle="Description"
            projectIdeaDescription="It is as if life goes on as usual, although many things have gone off the rails on this road to the unknown. Nothing but the presence of some people coming from out of town does not interest us in the first place. However, behind this normality, there is a deep veil of secrecy…"
          />
        </div>
        <div className={styles.left}>
          <ProjectDescription
            className={`${styles.rightContent} ${styles.underline}`}
            projectIdeaDescriptionTitle="Category"
            projectIdeaDescription={
              <>
                <span>Film</span> <span>Action</span> <span>Thriller</span>
              </>
            }
          />
        </div>
        <div className={styles.right}>
          <ProjectDescription
            className={`${styles.rightContent}`}
            projectIdeaDescriptionTitle="Goals"
            projectIdeaDescription="The goal is first to form the team and then to work through the idea down to the last detail before filming begins."
          />
        </div>
        <div className={styles.left}>
          <ProjectDescription
            className={styles.rightContent}
            projectIdeaDescriptionTitle="Start"
            projectIdeaDescription="A start date is not yet known. The start depends on everyone involved and is negotiable."
          />
        </div>
      </div>
      <NavBar className={styles.navBar} isIdeaPage={true} />
    </div>
  );
}

export default Idea;
