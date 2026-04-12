import { projects } from "../data/projects.js";
import Card from "../components/card/Card.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function FeaturedProjects() {
  const [featuredProjects, _] = useState(
    projects.filter((project) => project.featured === true),
  );

  return (
    <>
      <div className="hstack justify-between">
        <h2>Featured Projects</h2>
        <Link to="/projects" className="hover-accent">
          See all
        </Link>
      </div>
      <ul className="vstack">
        {featuredProjects.map((item) => (
          <li key={item.url}>
            <Card title={item.title} desc={item.preview} url={item.url} />
          </li>
        ))}
      </ul>
    </>
  );
}
