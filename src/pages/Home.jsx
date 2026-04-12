import profileImage from "../assets/images/profile.webp";
import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import { useState } from "react";
import ExperienceCards from "../components/ExperienceCards.jsx";
import CustomLink from "../components/CustomLink.jsx";
import Card from "../components/card/Card.jsx";
import GitHubIcon from "../assets/icons/github.svg?react";

export default function Home() {
  const [featuredProjects, _] = useState(
    projects.filter((project) => project.featured === true),
  );
  return (
    <>
      <section>
        <img src={profileImage} alt="Jacob Asker" className="profile-image" />

        <h2>Jacob Asker</h2>

        <p>
          I'm a Full-stack Developer with a bachelor's in Informatics,
          specializing in JavaScript/TypeScript, Node.js, and React.
        </p>

        <small className="text-secondary">
          Gothenburg, Sweden | Available for work
        </small>
        <div className="btn-group">
          <CustomLink
            href="mailto:jacob.asker@icloud.com"
            className="button small hover-opacity"
          >
            Contact me
          </CustomLink>
          <CustomLink
            href="https://github.com/Jackan04?tab=repositories"
            className="button small outline hover-bg"
          >
            <GitHubIcon className="icon-small" />
            GitHub
          </CustomLink>
        </div>
      </section>

      <section>
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
      </section>

      <section>
        <h2>Skillset</h2>
        <ExperienceCards />
      </section>
    </>
  );
}
