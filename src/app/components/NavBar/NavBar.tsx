import {
  faComments,
  faHome,
  faUserCircle,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import IdeaIcon from "../Icons/IdeaIcon";
import NavBarLink from "../NavBarLink/NavBarLink";
import styles from "./NavBar.module.css";

export type NavBarProps = {
  className?: string;
  isHomePage?: boolean;
  isProfilePage?: boolean;
  isIdeaPage?: boolean;
  isMessagesPage?: boolean;
  isNetworkPage?: boolean;
};

function NavBar({
  className,
  isHomePage,
  isProfilePage,
  isIdeaPage,
  isMessagesPage,
  isNetworkPage,
}: NavBarProps): JSX.Element {
  return (
    <div className={`${styles.navBar} ${className}`}>
      <NavBarLink
        icon={
          <FontAwesomeIcon
            icon={faHome}
            className={isHomePage ? `${styles.navBarItem__active}` : ""}
          />
        }
        link="/idea"
      />
      <NavBarLink
        icon={
          <FontAwesomeIcon
            icon={faUserCircle}
            className={isProfilePage ? `${styles.navBarItem__active}` : ""}
          />
        }
        link="/currentuserprofile"
      />
      <NavBarLink
        icon={
          <IdeaIcon
            className={isIdeaPage ? `${styles.navBarItem__active}` : ""}
          />
        }
        link="/ideadetails"
      />
      <NavBarLink
        icon={
          <FontAwesomeIcon
            icon={faComments}
            className={isMessagesPage ? `${styles.navBarItem__active}` : ""}
          />
        }
        link="/messages"
      />
      <NavBarLink
        icon={
          <FontAwesomeIcon
            icon={faUserFriends}
            className={isNetworkPage ? `${styles.navBarItem__active}` : ""}
          />
        }
        link="/network"
      />
    </div>
  );
}

export default NavBar;
