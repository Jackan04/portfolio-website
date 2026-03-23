import styles from "./Card.module.css";
import CustomLink from "../CustomLink";
import ChevronRightIcon from "../../assets/icons/chevron-right.svg?react";

export default function Card({ title, desc, buttonLabel, url }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className="body-secondary">{desc}</p>
      <CustomLink href={url} className="button small ghost">
        {buttonLabel}
        <ChevronRightIcon className="icon-small" />
      </CustomLink>
    </div>
  );
}
