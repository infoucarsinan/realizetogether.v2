import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { User } from "../../../types";
import EditUserProfile from "../EditUserProfile/EditUserProfile";
import ViewUserProfile from "../ViewUserProfile/ViewUserProfile";

export type UserProfileProps = {
  user: User;
  setIsUserEdited: (status: boolean) => void;
  isCurrentUser: boolean;
};

function UserProfile({
  user,
  setIsUserEdited,
  isCurrentUser,
}: UserProfileProps): JSX.Element {
  const [isEditMode, setIsEditMode] = useState(false);
  setIsUserEdited(isEditMode);

  return (
    <div>
      {isCurrentUser ? (
        <FontAwesomeIcon
          icon={faPen}
          onClick={() => {
            setIsEditMode(!isEditMode);
            setIsUserEdited(!isEditMode);
          }}
        />
      ) : (
        ""
      )}
      <div>
        {isEditMode ? (
          <EditUserProfile
            loggedUser={user}
            handleEditModeChange={setIsEditMode}
          />
        ) : (
          <ViewUserProfile user={user} />
        )}
      </div>
    </div>
  );
}

export default UserProfile;
