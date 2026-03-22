import styles from "./Footer.module.css";
import GitHubIcon from "../../assets/icons/github.svg?react";
import LinkedInIcon from "../../assets/icons/linkedin.svg?react";
import UnsplashIcon from "../../assets/icons/unsplash.svg?react";
import Link from "../Link.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.leftContent}>
          <p className="body-secondary">Jacob Asker &copy; {year}</p>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.iconContainer}>
            <Link
              href="https://github.com/Jackan04?tab=repositories"
              className="hover-accent"
              aria-label="Visit Jacob Asker on GitHub"
            >
              <GitHubIcon className="icon hover-accent" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jacob-asker-a096a7352/"
              className="hover-accent"
              aria-label="Visit Jacob Asker on LinkedIn"
            >
              <LinkedInIcon className="icon hover-accent" />
            </Link>
            <Link
              href="https://unsplash.com/@jacobasker04"
              className="hover-accent"
              aria-label="Visit Jacob Asker on Unsplash"
            >
              <UnsplashIcon className="icon hover-accent" />
            </Link>
          </div>
          <Link
            className="button hover-opacity"
            href="mailto:jacob.asker@icloud.com"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
