import styles from "./ExperienceCards.module.css";
import experiences from "../../data/experiences.js";
import { useState } from "react";

export default function ExperienceCards() {
  const [activeExperience, setActiveExperience] = useState(experiences[0]);

  return (
    <div className={styles.experienceContainer}>
      <div className="filterButtons">
        {experiences.map((experience) => (
          <button
            key={experience.category}
            className={`filterButton ${activeExperience === experience ? "active" : ""}`}
            onClick={() => setActiveExperience(experience)}
          >
            {experience.category}
          </button>
        ))}
      </div>

      <ul className={styles.cardGrid}>
        {experiences.map((experience) => {
          const isActive = activeExperience === experience;

          return (
            <li
              key={experience.category}
              className={`${styles.categoryCard} ${isActive ? styles.active : styles.dimmed}`}
            >
              <h3 className={styles.cardTitle}>{experience.category}</h3>
              <div className={styles.toolList}>
                {experience.toolset.map((tool) => (
                  <span key={tool} className={styles.toolCard}>
                    {tool}
                  </span>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
