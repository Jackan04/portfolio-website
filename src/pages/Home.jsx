import profileImage from "../assets/images/profile.webp";
import ExperienceCards from "../components/experience-cards/ExperienceCards.jsx";
import CustomLink from "../components/CustomLink.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section>
        <img src={profileImage} alt="Jacob Asker" className="profile-image" />
        <h2>Full-Stack Developer</h2>
        <p>
          I'm a full Stack developer finishing my Bachelor's in Informatics,
          looking for my first professional role. I build applications with care
          for how they work and how they feel to use.
        </p>
        <small>
          Gothenburg, Sweden | Available for work
        </small>
        <menu className="buttons">
          <CustomLink
            href="mailto:jacob.asker@icloud.com"
            className="button small hover-opacity"
          >
            Contact
          </CustomLink>
          <Link to="/projects" className="button small outline hover-accent">
            View Work
          </Link>
        </menu>
      </section>

      <section>
        <h2>Skillset</h2>
        <ExperienceCards />
      </section>
    </>
  );
}
