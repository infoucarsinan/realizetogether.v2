import React from "react";
import styles from "./Input.module.css";

type InputProps = {
  icon?: React.SVGProps<SVGSVGElement>;
  placeholder: string;
  value: string;
  type?: string;
  required?: boolean;
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
};

function Input({
  icon,
  placeholder,
  value,
  type,
  required,
  onChange,
  className,
  disabled,
}: InputProps): JSX.Element {
  return (
    <div>
      <label className={styles.container}>
        <span className={styles.container__icon}>{icon}</span>
        <input
          type={type}
          placeholder={`${placeholder}`}
          value={value}
          required={required}
          onChange={(event) => onChange(event.target.value)}
          className={`${styles.input} ${className}`}
          disabled={disabled}
        />
      </label>
    </div>
  );
}

export default Input;
