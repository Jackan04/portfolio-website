import styles from "./ExperienceCards.module.css";
import experiences from "../../data/experiences.js";
import { useState } from "react";

export default function ExperienceCards() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      {experiences.map((item) => (
        <div className={styles.card}>
          <h3 className={styles.title}>{item.category}</h3>
          <p>{item.description}</p>
          <button onClick={() => setIsOpen(item.category)} className="small">
            Open
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
        <h3 className={styles.title}>{item.category}</h3>
      </header>
      <div className={`dialog-content ${styles.toolList}`}>
        {item.toolset.map((tool) => (
          <div className={styles.label}>
            <p>{tool}</p>
          </div>
        ))}
      </div>

      <footer>
        <button className="outline" onClick={() => setIsOpen(false)}>Close</button>
      </footer>
    </dialog>
  );
}
