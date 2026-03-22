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
          Finishing my Bachelor's in Informatics and looking for my first
          professional role. I enjoy building practical, well-crafted
          applications. Take a look at my{" "}
          <Link className="inline-link" to="/projects">
            projects
          </Link>
          , or{" "}
          <CustomLink
            className="inline-link"
            href="mailto:jacob.asker@icloud.com"
          >
            get in touch
          </CustomLink>
          .
        </p>
      </section>

      <section>
        <h2>Skillset</h2>
        <ExperienceCards />
      </section>
    </>
  );
}
