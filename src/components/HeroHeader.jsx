import profileImage from "../assets/images/profile.webp";
import CustomLink from "./CustomLink";
import GitHubIcon from "../assets/icons/github.svg?react";

export default function HeroHeader() {
  return (
    <>
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
          className="button small hover-button-invert"
        >
          Contact me
        </CustomLink>
        <CustomLink
          href="https://github.com/Jackan04?tab=repositories"
          className="button small outline hover-button-fill"
        >
          <GitHubIcon className="icon-small" />
          GitHub
        </CustomLink>
      </div>
    </>
  );
}
