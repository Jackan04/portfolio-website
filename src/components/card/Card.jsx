import styles from "./Card.module.css";
import CustomLink from "../CustomLink";
import ChevronRightIcon from "../../assets/icons/chevron-right.svg?react";

export default function Card({ title, desc, url }) {
  return (
    <CustomLink href={url} className={styles.card}>
      <div className="hstack gap-sm">
        <b className={styles.title}>{title}</b>
        <ChevronRightIcon className="icon-small" />
      </div>
      <p>{desc}</p>
    </CustomLink>
  );
}
