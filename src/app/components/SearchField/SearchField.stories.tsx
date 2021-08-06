import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SearchField from "./SearchField";

export default {
  title: "Component/Search",
  component: "Search",
};

export const Search = (): JSX.Element => {
  return (
    <SearchField
      placeholderText="Search"
      icon={<FontAwesomeIcon icon={faAt} />}
    />
  );
};
