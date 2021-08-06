import React from "react";

type UserNameProps = {
  firstName?: string;
  lastName?: string;
};

function UserName({ firstName, lastName }: UserNameProps): JSX.Element {
  return (
    <p>
      {firstName} {lastName}
    </p>
  );
}

export default UserName;
