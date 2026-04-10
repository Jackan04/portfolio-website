import styles from "./Card.module.css";
import CustomLink from "../CustomLink";
import ChevronRightIcon from "../../assets/icons/chevron-right.svg?react";

export default function Card({ title, desc, url }) {
  return (
    <CustomLink href={url} className={`hover-bg ${styles.card}`}>
      <div className="hstack justify-between">
        <h3>{title}</h3>
        <ChevronRightIcon className="icon-small hover-shift" />
      </div>
      <small>{desc}</small>
    </CustomLink>
  );
}
