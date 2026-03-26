import styles from "./Card.module.css";
import CustomLink from "../CustomLink";
import ChevronRightIcon from "../../assets/icons/chevron-right.svg?react";

export default function Card({ title, desc, url }) {
  return (
    <CustomLink href={url} className={styles.card}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <ChevronRightIcon className={`icon-small ${styles.chevron}`} />
      </div>
      <p className={`body-secondary ${styles.text}`}>{desc}</p>
    </CustomLink>
  );
}
