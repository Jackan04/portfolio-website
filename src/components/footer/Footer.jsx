import styles from "./Footer.module.css";
import { getCurrentYear } from "../../script";
import GitHubIcon from "../../assets/icons/github.svg?react";
import LinkedInIcon from "../../assets/icons/linkedin.svg?react";
import UnsplashIcon from "../../assets/icons/unsplash.svg?react";

export default function Footer() {
  const year = getCurrentYear();
  return (
    <footer>
      <div className={`container ${styles.footer}`}>
        <div className={styles.leftContent}>
          <p>Copyright &copy; Jacob Asker {year}</p>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.iconContainer}>
            <a
              href="https://github.com/Jackan04?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="icon has-hover" />
            </a>
            <a
              href="https://www.linkedin.com/in/jacob-asker-a096a7352/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="icon has-hover" />
            </a>
            <a
              href="https://unsplash.com/@jacobasker04"
              target="_blank"
              rel="noopener noreferrer"
            >
              <UnsplashIcon className="icon has-hover" />
            </a>
          </div>
          <a className="button" href="mailto:jacob.asker@icloud.com">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
