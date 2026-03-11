import styles from "./ExperienceCards.module.css";
import experiences from "../../data/experiences.js";
import XMarkIcon from "../../assets/icons/xmark.svg?react";
import { useState } from "react";

export default function ExperienceCards() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      {experiences.map((item) => (
        <div key={item.category} className={styles.card}>
          <h3 className={styles.title}>{item.category}</h3>
          <p className="body-secondary">{item.description}</p>
          <button
            onClick={() => setIsOpen(item.category)}
            className={`small outline hover-accent ${styles.openDialogButton}`}
          >
            Read more
          </button>
          <Dialog item={item} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      ))}
    </div>
  );
}

function Dialog({ item, isOpen, setIsOpen }) {
  return (
    <dialog open={isOpen === item.category}>
      <header>
        <h2 className={styles.title}>{item.category}</h2>
        <button
          aria-label={`Close ${item.category} details`}
          className="transparent hover-background closeDialogButton"
          onClick={() => setIsOpen(false)}
        >
          <XMarkIcon className="icon" />
        </button>
      </header>
      <div className="dialog-section">
        <p>{item.details}</p>
      </div>
      <div className="dialog-section">
        <h3>Toolset</h3>
        <div className={styles.toolList}>
          {item.toolset.map((tool) => (
            <div key={tool} className={styles.label}>
              <p>{tool}</p>
            </div>
          ))}
        </div>
      </div>
    </dialog>
  );
}
