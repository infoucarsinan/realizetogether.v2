import React from "react";
import styles from "./SearchField.module.css";

type SearchFieldParams = {
  icon?: React.SVGProps<SVGSVGElement>;
  placeholderText?: string;
  className?: string;
};

function SearchField({
  icon,
  placeholderText = "Search",
  className,
}: SearchFieldParams): JSX.Element {
  return (
    <div>
      <label className={styles.container}>
        <span className={styles.container__icon}>{icon}</span>
        <input
          className={`${styles.searchField} ${className}`}
          type="text"
          placeholder={placeholderText}
        />
      </label>
    </div>
  );
}

//return (
//   <input
//     className={`${styles.searchField} ${className}`}
//     type="text"
//     placeholder={placeholderText}
//   />
// );

export default SearchField;
