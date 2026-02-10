import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import CustomNavLink from "./CustomNavLink.jsx";

export default function Header() {
  return (
    <header>
      <div className={`container ${styles.header}`}>
        <Link to="/" className={styles.logo}>
          Jacob Asker
        </Link>
        <nav>
          <ul>
            <li>
              <CustomNavLink to="/" label="Home" />
            </li>
            <li>
              <CustomNavLink to="/projects" label="Projects" />
            </li>
            <li>
              <CustomNavLink to="/photography" label="Photography" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
