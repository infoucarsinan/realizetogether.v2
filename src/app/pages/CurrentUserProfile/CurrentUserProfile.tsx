import {
  faIdBadge,
  faInfoCircle,
  faRocket,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { User } from "../../../types";
import ProfilePictureIcon from "../../components/Icons/ProfilePictureIcon";
import NavBar from "../../components/NavBar/NavBar";
import OpenTo from "../../components/OpenTo/OpenTo";
import SearchField from "../../components/SearchField/SearchField";
import UserImage from "../../components/UserImage/UserImage";
import UserProfile from "../../components/UserProfile/UserProfile";
import useMutation from "../../hooks/useMutation";
import {
  getLoggedInUser,
  updateUser,
  uploadProfilePicture,
} from "../../utils/api";
import styles from "./CurrentUserProfile.module.css";

function CurrentUserProfileForm(): JSX.Element {
  const [isUserEdited, setIsUserEdited] = useState(false);
  const [loggedUser, setLoggedUser] = useState<User | null>(null);

  const { mutate, errorMessage } = useMutation(updateUser);

  useEffect(() => {
    async function login() {
      fetchUser();
    }
    login();
  }, [isUserEdited]);

  async function fetchUser() {
    try {
      const user = await getLoggedInUser();
      setLoggedUser(user);
    } catch (error) {
      // setErrorMessage(error.toString());
    }
  }

  async function handlePictureUpload(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const pictureFile = event.target.files?.item(0);
    if (!pictureFile) {
      return;
    }
    const picturePath = await uploadProfilePicture(pictureFile);

    if (loggedUser !== null) {
      const email = loggedUser?.email;
      const imgSrc = picturePath.secure_url;
      const firstName = loggedUser.firstName;
      const lastName = loggedUser?.lastName;
      const user: User = { email, firstName, lastName, imgSrc };
      mutate(user);
    }

    setIsUserEdited(true);
    console.log(picturePath.secure_url);
  }

  if (!loggedUser) {
    console.log("User not found!");
    return <></>;
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
          <label className={styles.imageUpload}>
            <input type="file" onChange={handlePictureUpload} />
            {loggedUser.imgSrc === "" ? (
              <ProfilePictureIcon />
            ) : (
              <>
                <UserImage
                  imageSrc={`${loggedUser.imgSrc}`}
                  className={styles.userImage}
                />
              </>
            )}
          </label>
        </div>
        <div className={styles.userProfile}>
          {loggedUser === null ? (
            ""
          ) : (
            <UserProfile
              user={loggedUser}
              setIsUserEdited={setIsUserEdited}
              isCurrentUser={true}
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
                <span className={styles.ballon}>Screenwriting</span>
                <span className={styles.ballon}>Creative working</span>
                <span className={styles.ballon}>Home working</span>
                <span className={styles.ballon}>Knowledge transfer</span>
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
                <span>
                  Manager of the editorial department of HokEbooks Inc., Boston
                </span>
                <span>
                  Studied Japanese Studies at Stanford University, California
                </span>
              </div>
            }
            icon={<FontAwesomeIcon icon={faIdBadge} />}
          />
        </div>
      </div>
      {errorMessage && (
        <div className={styles.registerForm__error}>Error: {errorMessage}</div>
      )}
      <NavBar className={styles.navBar} isProfilePage={true} />
    </div>
  );
}

export default CurrentUserProfileForm;
