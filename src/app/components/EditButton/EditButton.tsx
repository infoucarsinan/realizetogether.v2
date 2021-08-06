import React from "react";
import EditButtonIcon from "../Icons/EditButtonIcon";
import styles from "./EditButton.module.css";

export type EditButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
};

function EditButton({ disabled, onClick }: EditButtonProps): JSX.Element {
  return (
    <button className={styles.editButton} onClick={onClick} disabled={disabled}>
      <EditButtonIcon />
    </button>
  );
}

export default EditButton;
