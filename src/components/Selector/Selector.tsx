import { FC, ReactNode, SelectHTMLAttributes } from "react";
import styles from "./selector.module.css";

interface SelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

const Selector: FC<SelectorProps> = ({ children, ...rest }) => {
  return (
    <select {...rest} className={styles.selector}>
      {children}
    </select>
  );
};

export default Selector;
