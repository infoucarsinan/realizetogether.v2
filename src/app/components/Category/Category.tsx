import React from "react";
import EditButtonIcon from "../Icons/EditButtonIcon";
import styles from "./Category.module.css";

function Category(): JSX.Element {
  return (
    <div className={styles.container}>
      <h4>Project Category</h4>
      <div className={styles.editButton}>
        <EditButtonIcon />
      </div>
      <p className={styles.category}>
        <span>Film</span> <span>Action</span> <span>Thriller</span>
      </p>
    </div>
  );
}

export default Category;
