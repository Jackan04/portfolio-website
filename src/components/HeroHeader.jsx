import profileImage from "../assets/images/profile.webp";
import CustomLink from "./CustomLink";

export default function HeroHeader() {
  return (
    <>
      <img src={profileImage} alt="Jacob Asker" className="profile-image" />
      <h2>Jacob Asker</h2>
      <div className="vstack gap-md">
        <p>
          Junior Full-Stack Developer from Gothenburg, Sweden with a degree in
          Informatics. I work with JavaScript/TypeScript, React, and Node.js.
        </p>
        <div className="hstack gap-sm">
          <CustomLink
            href="mailto:jacob.asker@icloud.com"
            className="button hover-invert"
          >
            Contact me
          </CustomLink>
          <CustomLink
            href="/resume.pdf"
            className="button outline hover-accent"
            aria-label="Download resume"
          >
            <div className="hstack gap-sm">View resume</div>
          </CustomLink>
        </div>
      </div>
    </>
  );
}
