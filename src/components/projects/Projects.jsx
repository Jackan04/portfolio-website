import styles from "./Projects.module.css";
import { categories, projects } from "../../data/projects";
import { useState } from "react";
import { capitalize } from "../../script";
import Link from "../Link.jsx";

export default function Projects() {
  const [filter, setFilter] = useState(null);

  const visibleProjects =
    filter === null
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <div className="filterButtons">
        <FilterButton
          label="All"
          value={null}
          filter={filter}
          setFilter={setFilter}
        />
        {categories.map((category) => (
          <FilterButton
            key={category}
            label={capitalize(category)}
            value={category}
            filter={filter}
            setFilter={setFilter}
          />
        ))}
      </div>
      <ul className={styles.projectList}>
        {visibleProjects.map((item, index) => (
          <li key={index}>
            <div className={styles.card}>
              <h2>{item.title}</h2>
              <p className={styles.description}>{item.description}</p>
              <Link href={item.url} className={`button small outline`}>
                Go to project
              </Link>
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
      className={value === filter ? "filterButton active" : "filterButton"}
    >
      {label}
    </button>
  );
}
