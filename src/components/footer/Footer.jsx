import styles from "./Footer.module.css";
import { getCurrentYear } from "../../script";
import GitHubIcon from "../../assets/icons/github.svg?react";
import LinkedInIcon from "../../assets/icons/linkedin.svg?react";
import UnsplashIcon from "../../assets/icons/unsplash.svg?react";
import Link from "../Link.jsx";

export default function Footer() {
  const year = getCurrentYear();
  return (
    <footer>
      <div className={`container ${styles.footer}`}>
        <div className={styles.leftContent}>
          <p className={styles.copyright}>Jacob Asker &copy; {year}</p>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.iconContainer}>
            <Link href="https://github.com/Jackan04?tab=repositories" external>
              <GitHubIcon className="icon has-hover" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jacob-asker-a096a7352/"
              external
            >
              <LinkedInIcon className="icon has-hover" />
            </Link>
            <Link href="https://unsplash.com/@jacobasker04" external>
              <UnsplashIcon className="icon has-hover" />
            </Link>
          </div>
          <Link className="button" href="mailto:jacob.asker@icloud.com">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
