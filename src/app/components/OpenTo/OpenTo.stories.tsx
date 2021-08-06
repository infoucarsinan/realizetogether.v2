import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import OpenTo from "./OpenTo";

export default {
  title: "Component/OpenTo",
  component: OpenTo,
};

export const OpenToProject = (): JSX.Element => (
  <OpenTo
    title="Experience"
    description={
      <div>
        <span>
          "Manager of the editorial department of HokEbooks Inc., Boston"
        </span>
        <span>
          "Studied Japanese Studies at Stanford University, California"
        </span>
      </div>
    }
    icon={<FontAwesomeIcon icon={faIdBadge} />}
  />
);
