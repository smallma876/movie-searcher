import React, { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./card.module.css";

interface CardProps {
  title: string;
  year: string;
  poster: string;
}

const Card: FC<PropsWithChildren<CardProps>> = ({ title, year, poster }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.year}>{year}</div>
      <img className={styles.image} src={poster} />
    </div>
  );
};

export default Card;
