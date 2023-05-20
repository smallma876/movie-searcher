import React, { FC, InputHTMLAttributes } from "react";
import styles from "./textfield.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextField: FC<Props> = ({ label, id, ...rest }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" className={styles.input} {...rest} />
    </div>
  );
};

export default TextField;
