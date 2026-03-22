import profileImage from "../../assets/images/profile.webp";
import ExperienceCards from "../experience-cards/ExperienceCards.jsx";
import CustomLink from "../CustomLink.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section>
        <img
          src={profileImage}
          loading="lazy"
          alt="Jacob Asker"
          className="profile-image"
        />
        <h2>Full-Stack Developer and Informatics Student</h2>
      </section>

      <section>
        <h2>About Me</h2>
        <p>
          I'm currently finishing my Bachelor's in Informatics, where I bridge
          the gap between technical implementation and user experience. I enjoy
          turning ideas into practical, intuitive experiences and learning by
          building real projects. You can explore my latest work on my
          <Link className="inline-link" to="/projects">
            {" "}
            projects page
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Get in Touch</h2>
        <p>
          I'm looking for opportunities to apply my skills in a professional
          environment. If you think I'd be a good fit,
          <CustomLink
            className="inline-link"
            href="mailto:jacob.asker@icloud.com"
          >
            {" "}
            I'd love to hear from you
          </CustomLink>
          .
        </p>
      </section>

      <section>
        <h2>Technical Experience</h2>
        <ExperienceCards />
      </section>
    </>
  );
}
