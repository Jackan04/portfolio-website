import ChevronRightIcon from "../assets/icons/chevron-right.svg?react";
import styles from "./Accordion.module.css";

export default function Accordion({ summary, children }) {
  return (
    <details className={styles.accordion}>
      <summary className={styles.summary}>
        {summary}
        <ChevronRightIcon className={`icon ${styles.icon}`} />
      </summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
}
