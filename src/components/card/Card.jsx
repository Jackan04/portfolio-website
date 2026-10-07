import styles from "./Card.module.css";
import CustomLink from "../CustomLink";

export default function Card({ title, desc, url }) {
  return (
    <CustomLink href={url} className={styles.card}>
      <div className="hstack gap-sm">
        <b className={styles.title}>{title}</b>
      </div>
      <p>{desc}</p>
    </CustomLink>
  );
}
