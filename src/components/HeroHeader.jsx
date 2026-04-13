import profileImage from "../assets/images/profile.webp";
import CustomLink from "./CustomLink";
import GitHubIcon from "../assets/icons/github.svg?react";

export default function HeroHeader() {
  return (
    <>
      <img src={profileImage} alt="Jacob Asker" className="profile-image" />
      <h2>Jacob Asker</h2>
      <p>
        I'm a Full-stack Developer from Sweden with a bachelor's in Informatics,
        specializing in JavaScript/TypeScript, Node.js, and React.
      </p>
      <div className="hstack gap-sm">
        <CustomLink
          href="mailto:jacob.asker@icloud.com"
          className="button small hover-invert"
        >
          Contact me
        </CustomLink>
        <CustomLink
          href="https://github.com/Jackan04?tab=repositories"
          className="button small outline hover-accent"
        >
          <GitHubIcon className="icon-small" />
          GitHub
        </CustomLink>
      </div>
    </>
  );
}
