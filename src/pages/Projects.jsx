import { categories, projects } from "../data/projects.js";
import { useEffect, useState } from "react";
import Card from "../components/card/Card.jsx";

export default function Projects() {
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const visibleProjects =
    filter === null
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <section aria-label="Filter buttons">
        <div className="btn-group">
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
      </section>
      <section aria-label="Projects">
        <ul className="list-container">
          {visibleProjects.map((item) => (
            <li key={item.url}>
              <Card title={item.title} desc={item.preview} url={item.url} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

function FilterButton({ label, value, filter, setFilter }) {
  return (
    <button
      onClick={() => setFilter(value)}
      className={
        value === filter ? "filter-btn active" : "filter-btn hover-accent"
      }
    >
      {label}
    </button>
  );
}
