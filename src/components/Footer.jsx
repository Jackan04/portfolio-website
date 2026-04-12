import GitHubIcon from "../assets/icons/github.svg?react";
import LinkedInIcon from "../assets/icons/linkedin.svg?react";
import UnsplashIcon from "../assets/icons/unsplash.svg?react";
import EnvelopeIcon from "../assets/icons/envelope.svg?react";
import CustomLink from "./CustomLink.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>
        <p className="text-secondary">Jacob Asker &copy; {year}</p>
      </div>
      <div className="btn-group">
        <CustomLink
          className="hover-accent"
          href="mailto:jacob.asker@icloud.com"
        >
          <EnvelopeIcon className="icon" />
        </CustomLink>
        <CustomLink
          href="https://github.com/Jackan04?tab=repositories"
          className="hover-accent"
          aria-label="Visit Jacob Asker on GitHub"
        >
          <GitHubIcon className="icon" />
        </CustomLink>
        <CustomLink
          href="https://www.linkedin.com/in/jacob-asker-a096a7352/"
          className="hover-accent"
          aria-label="Visit Jacob Asker on LinkedIn"
        >
          <LinkedInIcon className="icon" />
        </CustomLink>
        <CustomLink
          href="https://unsplash.com/@jacobasker04"
          className="hover-accent"
          aria-label="Visit Jacob Asker on Unsplash"
        >
          <UnsplashIcon className="icon" />
        </CustomLink>
      </div>
    </footer>
  );
}
