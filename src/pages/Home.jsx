import profileImage from "../assets/images/profile.webp";
import ExperienceCards from "../components/experience-cards/ExperienceCards.jsx";
import CustomLink from "../components/CustomLink.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section>
        <img src={profileImage} alt="Jacob Asker" className="profile-image" />
        <h2>Hi, I'm Jacob!</h2>
        <p>
          I'm a full-stack web developer finishing my Bachelor's in Informatics,
          specializing in React and Node.js. I build with care for how things
          work and how they feel to use.
        </p>

        <small>Gothenburg, Sweden | Available for work</small>
        <div className="btn-group">
          <CustomLink
            href="mailto:jacob.asker@icloud.com"
            className="button small hover-opacity"
          >
            Contact me
          </CustomLink>
          <Link to="/projects" className="button small outline hover-accent">
            See my work
          </Link>
        </div>
      </section>

      <section>
        <h2>Skillset</h2>
        <ExperienceCards />
      </section>
    </>
  );
}
