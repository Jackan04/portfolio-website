import styles from "./Card.module.css";
import CustomLink from "../CustomLink";
import ChevronRightIcon from "../../assets/icons/chevron-right.svg?react";

export default function Card({ title, desc, url }) {
  return (
    <CustomLink href={url} className={styles.card}>
      <div className="hstack justify-between">
        <b className={styles.title}>{title}</b>
        <ChevronRightIcon className={`${styles.ChevronRightIcon} icon-small`} />
      </div>
      <small>{desc}</small>
    </CustomLink>
  );
}
