import styles from "./Card.module.css";
import CustomLink from "../CustomLink";

export default function Card({ title, desc, url }) {
  return (
    <CustomLink href={url} className={styles.card}>
      <div className="hstack justify-between">
        <b className={styles.title}>{title}</b>
      </div>
      <small>{desc}</small>
    </CustomLink>
  );
}
