import {
  faIdBadge,
  faInfoCircle,
  faRocket,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../../../types";
import AddConnectionButton from "../../components/AddConnectionButton/AddConnectionButton";
import NavBar from "../../components/NavBar/NavBar";
import OpenTo from "../../components/OpenTo/OpenTo";
import SearchField from "../../components/SearchField/SearchField";
import UserImage from "../../components/UserImage/UserImage";
import UserProfile from "../../components/UserProfile/UserProfile";
import WriteMessageButton from "../../components/WriteMessageButton/WriteMessageButton";
import { getUser } from "../../utils/api";
import styles from "./UserProfile.module.css";

function UserProfileForm(): JSX.Element {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loggedUser, setLoggedUser] = useState<User | null>(null);
  const [isUserEdited, setIsUserEdited] = useState(false);
  const { firstname } = useParams<{ firstname: string }>();

  useEffect(() => {
    async function login() {
      fetchUser();
    }
    login();
  }, [isUserEdited]);

  async function fetchUser() {
    try {
      const user = await getUser(firstname);
      setLoggedUser(user);
    } catch (error) {
      setErrorMessage(error.toString());
    }
  }

  if (!loggedUser) {
    setLoggedUser({
      email: "asime@nileper.comm",
      firstName: "Asime",
      lastName: "Nileper",
      password: "1234",
      imgSrc: "/Asime.jpeg",
      userDescription: "Playful ways of life",
      userAddress: "Nord Aveue 34, 75362 Lyon, France",
      userEmployer: "Artis Coery Creative a Doperme",
      userWebsite: "www.asimenileper.com",
      userPhoneNumber: "+423 122 4191 321",
      about:
        "Hi. I am Asime. For me it all started with Amiga 500. Before that I was able to taste something from Atari. Since then I have not been able to stop myself from playing computer games. I love sports and I like to travel around the world.",
    });
  }
  return (
    <div className={styles.container__vh}>
      <div className={styles.topFix}>
        <SearchField
          className={styles.searchField}
          placeholderText="Realize Together"
          icon={<FontAwesomeIcon icon={faSearch} />}
        />
      </div>
      <main className={styles.container}>
        <div className={styles.user}>
          {loggedUser === null ? (
            ""
          ) : (
            <UserImage
              imageSrc={`${loggedUser.imgSrc}`}
              className={styles.userImage}
            />
          )}
          <AddConnectionButton />
          <WriteMessageButton />
        </div>
        <div className={styles.userProfile}>
          {loggedUser === null ? (
            ""
          ) : (
            <UserProfile
              user={loggedUser}
              setIsUserEdited={setIsUserEdited}
              isCurrentUser={false}
            />
          )}
        </div>
      </main>
      <div className={styles.underContainer}>
        <div className={`${styles.right} ${styles.secondaryBackgroundColor}`}>
          <OpenTo
            className={`${styles.openTo} ${styles.rightContent}`}
            title="Open to"
            description={
              <div className={styles.ballonContainer}>
                <span className={styles.ballon}>Gaming</span>
                <span className={styles.ballon}>
                  Further projects of all kinds
                </span>
                <span className={styles.ballon}>
                  Cultural exchange with a bit of humor
                </span>
              </div>
            }
            icon={<FontAwesomeIcon icon={faRocket} />}
          />
        </div>
        <div className={`${styles.left} ${styles.tertiaryBackgroundColor}`}>
          <OpenTo
            className={`${styles.openTo} ${styles.leftContent}`}
            title="About"
            description={`${loggedUser?.about}`}
            icon={<FontAwesomeIcon icon={faInfoCircle} />}
          />
        </div>
        <div className={`${styles.right} ${styles.secondaryBackgroundColor}`}>
          <OpenTo
            className={`${styles.openTo} ${styles.rightContent}`}
            title="Experience"
            description={
              <div className={styles.ballonContainer}>
                <span>Freelancer in the development process</span>
                <span>
                  Head of Department at Games College at Vanue Pice, Cannes
                </span>
                <span>
                  Apprenticeship as a game developer at Moyre & Jiscer, Paris
                </span>
              </div>
            }
            icon={<FontAwesomeIcon icon={faIdBadge} />}
          />
        </div>
      </div>
      {errorMessage && <div>Error: {errorMessage}</div>}
      <NavBar className={styles.navBar} isNetworkPage={true} />
    </div>
  );
}

export default UserProfileForm;
