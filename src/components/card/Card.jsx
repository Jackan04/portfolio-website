import styles from "./Card.module.css";
import CustomLink from "../CustomLink";
import ChevronRightIcon from "../../assets/icons/chevron-right.svg?react";

export default function Card({ title, desc, buttonLabel, url }) {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <b>{title}</b>
        <small>{desc}</small>
      </div>
      <CustomLink href={url} className="button small ghost">
        {buttonLabel}
        <ChevronRightIcon className="icon-small" />
      </CustomLink>
    </div>
  );
}
