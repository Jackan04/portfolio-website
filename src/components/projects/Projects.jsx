import styles from "./Projects.module.css";
import allProjects from "../../data/projects";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState(null);

  const visibleProjects =
    filter === null
      ? allProjects
      : allProjects.filter((project) => project.category === filter);

  return (
    <div className="content">
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
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <div className={styles.card}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FilterButton({ label, value, filter, setFilter }) {
  return (
    <button
      onClick={() => setFilter(value)}
      className={value === filter ? styles.active : ""}
    >
      {label}
    </button>
  );
}
