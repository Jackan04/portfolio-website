import styles from "./ProjectCards.module.css";
import allProjects from "../../data/projects";
import { useEffect, useState } from "react";

export default function ProjectCards() {
  const [filter, setFilter] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(allProjects);

  useEffect(() => {
    if (filter === null) {
      setVisibleProjects(allProjects);
    } else {
      const filtered = allProjects.filter(
        (project) => project.category === filter,
      );
      setVisibleProjects(filtered);
    }
  }, [filter]);

  return (
    <div className="content">
      <div className={styles.filterButtons}>
        <FilterButton
          label="All"
          value={null}
          filter={filter}
          setFilter={setFilter}
        ></FilterButton>
        <FilterButton
          label="Code"
          value="code"
          filter={filter}
          setFilter={setFilter}
        ></FilterButton>
        <FilterButton
          label="Design"
          value="design"
          filter={filter}
          setFilter={setFilter}
        ></FilterButton>
      </div>
      <ul className={styles.projectList}>
        {visibleProjects.map((item, index) => (
          <li key={item.title || index}>
            <Card
              title={item.title}
              description={item.description}
              url={item.url}
            />
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

function Card({ title, description, url }) {
  return (
    <a href={url}>
      <div className={styles.card}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
}
