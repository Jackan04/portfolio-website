import profileImage from "../assets/images/profile.webp";
import ExperienceCards from "../components/experience-cards/ExperienceCards.jsx";
import CustomLink from "../components/CustomLink.jsx";
import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import { useState } from "react";
import Card from "../components/card/Card.jsx";
import ChevronRightIcon from "../assets/icons/chevron-right.svg?react";

export default function Home() {
  const [featuredProjects, _] = useState(
    projects.filter((project) => project.featured === true),
  );
  return (
    <>
      <section>
        <img src={profileImage} alt="Jacob Asker" className="profile-image" />
        <h2>Hi, I'm Jacob</h2>
        <p>
          I’m a Full-stack Developer with a bachelor's in Informatics, building
          web and mobile applications with a focus on usability and solid
          architecture.
        </p>

        <small>Gothenburg, Sweden | Available for work</small>
        <CustomLink
          href="mailto:jacob.asker@icloud.com"
          className="button small hover-opacity"
        >
          Contact me
        </CustomLink>
      </section>

      <section>
        <h2>Featured Projects</h2>
        <ul className="grid-container">
          {featuredProjects.map((item) => (
            <li key={item.url}>
              <Card title={item.title} desc={item.preview} url={item.url} />
            </li>
          ))}
        </ul>
        <Link to="/projects" className="button small ghost hover-bg">
          See all projects
          <ChevronRightIcon className="icon-small" />
        </Link>
      </section>

      <section>
        <h2>Skillset</h2>
        <ExperienceCards />
      </section>
    </>
  );
}
