import styles from "./Projects.module.css";
import allProjects from "../../data/projects";
import { useState } from "react";
import ArrowRightIcon from "../../assets/icons/arrow-right.svg?react";

export default function Projects() {
  const [filter, setFilter] = useState(null);

  const visibleProjects =
    filter === null
      ? allProjects
      : allProjects.filter((project) => project.category === filter);

  return (
    <>
      <div className={styles.filterButtons}>
        <FilterButton
          label="All"
          value={null}
          filter={filter}
          setFilter={setFilter}
        />
        <FilterButton
          label="Code"
          value="code"
          filter={filter}
          setFilter={setFilter}
        />
        <FilterButton
          label="Design"
          value="design"
          filter={filter}
          setFilter={setFilter}
        />
      </div>
      <ul className={styles.projectList}>
        {visibleProjects.map((item, index) => (
          <li key={index}>
            <div className={styles.card}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a
                href={item.url}
                className={`button ${styles.projectLinkButton}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to project
              </a>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

function FilterButton({ label, value, filter, setFilter }) {
  return (
    <button
      onClick={() => setFilter(value)}
      className={
        value === filter
          ? `${styles.active} ${styles.filterButton}`
          : styles.filterButton
      }
    >
      {label}
    </button>
  );
}
