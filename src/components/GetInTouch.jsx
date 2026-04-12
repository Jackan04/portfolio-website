import CustomLink from "./CustomLink.jsx";
import GitHubIcon from "../assets/icons/github.svg?react";
import LinkedInIcon from "../assets/icons/linkedin.svg?react";
import UnsplashIcon from "../assets/icons/unsplash.svg?react";
import EnvelopeIcon from "../assets/icons/envelope.svg?react";

export default function GetInTouch() {
  return (
    <div className="vstack">
      <CustomLink className="hover-accent" href="mailto:jacob.asker@icloud.com">
        <div className="hstack">
          <EnvelopeIcon className="icon" />
          Email
        </div>
      </CustomLink>
      <CustomLink
        href="https://github.com/Jackan04?tab=repositories"
        className="hover-accent"
        aria-label="Visit Jacob Asker on GitHub"
      >
        <div className="hstack">
          <GitHubIcon className="icon" />
          GitHub
        </div>
      </CustomLink>
      <CustomLink
        href="https://www.linkedin.com/in/jacob-asker-a096a7352/"
        className="hover-accent"
        aria-label="Visit Jacob Asker on LinkedIn"
      >
        <div className="hstack">
          <LinkedInIcon className="icon" />
          LinkedIn
        </div>
      </CustomLink>
      <CustomLink
        href="https://unsplash.com/@jacobasker04"
        className="hover-accent"
        aria-label="Visit Jacob Asker on Unsplash"
      >
        <div className="hstack">
          <UnsplashIcon className="icon" />
          Unsplash
        </div>
      </CustomLink>
    </div>
  );
}
