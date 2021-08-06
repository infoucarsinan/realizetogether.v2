import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import IdeaIcon from "../../components/Icons/IdeaIcon";
import NavBar from "../../components/NavBar/NavBar";
import ProjectIdea from "../../components/ProjectIdea/ProjectIdea";
import SearchField from "../../components/SearchField/SearchField";
import styles from "./Idea.module.css";

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
        <IdeaIcon />
        <h1 className={styles.header__title}>
          Ideas
          <br />
          realize together
        </h1>
      </div>
      <div className={styles.underContainer}>
        <div className={styles.right}>
          <a href="/ideadetails">
            <ProjectIdea
              className={styles.rightContent}
              userImageSrc="./User.jpeg"
              userName="Natalia Alvarez"
              projectIdeaTitle="A thriller where nothing..."
              projectIdeaDescription="It is as if life goes on as usual, although many things have gone off the rails on this road to the unknown. Nothing but the presence of some people…"
            />
          </a>
        </div>
        <div className={styles.left}>
          <ProjectIdea
            className={styles.leftContent}
            userImageSrc="./Asime.jpeg"
            userName="Asime Nileper"
            projectIdeaTitle="Groundbreaking computer 👾 game"
            projectIdeaDescription="Hello friends. This game has many legs. The most dangerous aspect of this game, in which at least 4 characters will push you to your limits in each stage, will make you addicted to yourself…"
          />
        </div>
        <div className={styles.right}>
          <ProjectIdea
            className={styles.rightContent}
            userImageSrc="./Ken.jpeg"
            userName="Ken Alcerie"
            projectIdeaTitle="Never ending photo world"
            projectIdeaDescription="Our projects mix photography with calligraphy and achieve indescribable results. Since we are not stuck in any way, we are always looking for new partners who can expand our horizons in various ways and explore new paths."
          />
        </div>
      </div>
      <NavBar className={styles.navBar} isHomePage={true} />
    </div>
  );
}

export default Idea;
