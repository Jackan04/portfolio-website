import styles from "./Card.module.css";
import CustomLink from "../CustomLink";
import ChevronRightIcon from "../../assets/icons/chevron-right.svg?react";

export default function Card({ title, desc, url }) {
  return (
    <CustomLink href={url} className={styles.card}>
      <div className="hstack justify-between">
        <div>
          <b className={styles.title}>{title}</b>
          <p>{desc}</p>
        </div>
        <ChevronRightIcon className="icon-small" />
      </div>
    </CustomLink>
  );
}
