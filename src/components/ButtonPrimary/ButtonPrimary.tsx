import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./button-primary.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  id?: string;
}

const ButtonPrimary: FC<Props> = ({ id, label, ...rest }) => {
  return (
    <button className={styles.button} type="submit" id={id} {...rest}>
      {label}
    </button>
  );
};

export default ButtonPrimary;
