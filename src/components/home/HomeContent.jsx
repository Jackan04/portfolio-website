import profileImage from "../../assets/images/profile.jpeg";
import { Link } from "react-router-dom";
import ExperienceCards from "../experience-cards/ExperienceCard.jsx";
import styles from "./HomeContent.module.css";

export default function HomeContent() {
  return (
    <div className="content">
      <div className={styles.section}>
        <img
          width={100}
          height={100}
          src={profileImage}
          loading="lazy"
          alt="Profile Image"
          className={styles.profileImage}
        />
        <h2>
          Informatics student with a passion for building and designing digital
          things.
        </h2>
      </div>
      <div className={styles.section}>
        <h2>About Me</h2>
        <p>
          I’m currently finishing my bacherlors degree in informatics, where I
          spend most of my time exploring the intersection of code and user
          experience. When I’m not at the keyboard, you’ll usually find me
          hiking with friends, lifting at the gym, or behind a camera. Take a
          look at some of my{" "}
          <Link className="inline-link" to={"/projects"}>
            projects
          </Link>
          .
        </p>
      </div>
      <div className={styles.section}>
        <h2>Technical Experience</h2>
        <ExperienceCards></ExperienceCards>
      </div>
    </div>
  );
}
