import styles from "./Projects.module.css";
import { categories, projects } from "../../data/projects";
import { useState } from "react";
import Link from "../Link.jsx";
import Dialog from "../dialog/Dialog.jsx";
import Card from "../card/Card.jsx";

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
      <ul className="grid-container">
        {visibleProjects.map((item) => (
          <li key={item.url}>
            <Card
              title={item.title}
              desc={item.preview}
              buttonLabel="Read More"
              onButtonClick={() => setIsOpen(item.url)}
            />
            <Dialog
              title={item.title}
              isOpen={isOpen === item.url}
              onClose={() => setIsOpen(false)}
            >
              <p>{item.description}</p>
              <Link href={item.url} className="button small hover-opacity">
                Visit Project
              </Link>
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
