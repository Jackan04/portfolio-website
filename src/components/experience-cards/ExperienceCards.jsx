import styles from "./ExperienceCards.module.css";
import experiences from "../../data/experiences.js";
import ChevronDownIcon from "../../assets/icons/chevron-down.svg?react";

export default function ExperienceCards() {
  return (
    <ul className="grid-container">
      {experiences.map((item) => (
        <li key={item.category}>
          <details className={styles.card}>
            <summary className={`hover-bg ${styles.summary}`}>
              <p>{item.category}</p>
              <ChevronDownIcon className={`icon-small ${styles.chevron}`} />
            </summary>
            <div className={styles.toolList}>
              {item.toolset.map((tool) => (
                <span key={tool} className={styles.label}>
                  {tool}
                </span>
              ))}
            </div>
          </details>
        </li>
      ))}
    </ul>
  );
}
