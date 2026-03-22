import styles from "./ExperienceCards.module.css";
import experiences from "../../data/experiences.js";
import { useState } from "react";
import Dialog from "../dialog/Dialog.jsx";
import Card from "../card/Card.jsx";

export default function ExperienceCards() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ul className="grid-container">
      {experiences.map((item) => (
        <li key={item.category}>
          <Card
            title={item.category}
            desc={item.description}
            buttonLabel="Read More"
            onButtonClick={() => setIsOpen(item.category)}
          />
          <Dialog
            title={item.category}
            isOpen={isOpen === item.category}
            onClose={() => setIsOpen(false)}
          >
            <div>
              <p>{item.details}</p>
            </div>
            <div>
              <h3>Toolset</h3>
              <div className={styles.toolList}>
                {item.toolset.map((tool) => (
                  <div key={tool} className={styles.label}>
                    <p>{tool}</p>
                  </div>
                ))}
              </div>
            </div>
          </Dialog>
        </li>
      ))}
    </ul>
  );
}
