import CustomLink from "./CustomLink.jsx";
import GitHubIcon from "../assets/icons/github.svg?react";
import LinkedInIcon from "../assets/icons/linkedin.svg?react";
import UnsplashIcon from "../assets/icons/unsplash.svg?react";
import EnvelopeIcon from "../assets/icons/envelope.svg?react";
import FileIcon from "../assets/icons/file.svg?react";

export default function Connect() {
  return (
    <div className="vstack gap-sm">
      <CustomLink className="hover-accent" href="mailto:jacob.asker@icloud.com">
        <div className="hstack gap-md">
          <EnvelopeIcon className="icon" />
          Email
        </div>
      </CustomLink>
      <CustomLink
        href="https://github.com/Jackan04?tab=repositories"
        className="hover-accent"
        aria-label="Visit Jacob Asker on GitHub"
      >
        <div className="hstack gap-md">
          <GitHubIcon className="icon" />
          GitHub
        </div>
      </CustomLink>
      <CustomLink
        href="/resume.pdf"
        className="hover-accent"
        aria-label="Download resume"
      >
        <div className="hstack gap-md">
          <FileIcon className="icon" />
          Resume
        </div>
      </CustomLink>
      <CustomLink
        href="https://www.linkedin.com/in/jacob-asker-a096a7352/"
        className="hover-accent"
        aria-label="Visit Jacob Asker on LinkedIn"
      >
        <div className="hstack gap-md">
          <LinkedInIcon className="icon" />
          LinkedIn
        </div>
      </CustomLink>
      <CustomLink
        href="https://unsplash.com/@jacobasker04"
        className="hover-accent"
        aria-label="Visit Jacob Asker on Unsplash"
      >
        <div className="hstack gap-md">
          <UnsplashIcon className="icon" />
          Unsplash
        </div>
      </CustomLink>
    </div>
  );
}
