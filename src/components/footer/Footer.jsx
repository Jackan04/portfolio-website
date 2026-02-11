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
            <GitHubIcon className="icon has-hover" />
            <LinkedInIcon className="icon has-hover" />
            <UnsplashIcon className="icon has-hover" />
          </div>
          <a className="button" href="mailto:jacob.asker@icloud.com">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
