import styles from "./Projects.module.css";
import { categories, projects } from "../../data/projects";
import { useState } from "react";
import Link from "../Link.jsx";
import Dialog from "../dialog/Dialog.jsx";

export default function Projects() {
  const [filter, setFilter] = useState(null);
  const [isOpen, setIsOpen] = useState(null);

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
            label={category.charAt(0).toUpperCase() + category.slice(1)}
            value={category}
            filter={filter}
            setFilter={setFilter}
          />
        ))}
      </div>
      <ul className={styles.projectList}>
        {visibleProjects.map((item) => (
          <li key={item.url}>
            <div className={styles.card}>
              <h3>{item.title}</h3>
              <p className="body-secondary">{item.preview}</p>
              <button
                onClick={() => setIsOpen(item.url)}
                className={`button small outline hover-accent`}
              >
                Read More
              </button>
            </div>
            <Dialog
              title={item.title}
              isOpen={isOpen === item.url}
              onClose={() => setIsOpen(false)}
            >
              <div>
                <p>{item.description}</p>
              </div>
              <div>
                <Link href={item.url} className="button small hover-opacity">
                  Visit Project
                </Link>
              </div>
            </Dialog>
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
        value === filter ? "filterButton active" : "filterButton hover-accent"
      }
    >
      {label}
    </button>
  );
}
