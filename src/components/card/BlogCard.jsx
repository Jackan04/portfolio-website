import styles from "./Card.module.css";
import CustomLink from "../CustomLink";
import ChevronRightIcon from "../../assets/icons/chevron-right.svg?react";

export default function BlogCard({ title, summary, date, url }) {
  const formatted = new Date(date).toLocaleDateString("en-SE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article>
      <CustomLink href={url} className={`hover-bg ${styles.card}`}>
        <div className="hstack justify-between">
          <h3>{title}</h3>
          <ChevronRightIcon className={`icon-small ${styles.chevron}`} />
        </div>
        {summary && <small>{summary}</small>}
        <small className={`text-secondary ${styles.date}`}>{formatted}</small>
      </CustomLink>
    </article>
  );
}
