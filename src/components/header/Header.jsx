import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
// import CustomNavLink from "./CustomNavLink.jsx";

export default function Header() {
  return (
    <header>
      <div className={`container ${styles.header}`}>
        <Link to="/" className={`${styles.logo} has-hover`}>
          Jacob
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
              <CustomNavLink to="/photography" label="Photos" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function CustomNavLink({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${styles.navLink} ${styles.active} has-hover`
          : `${styles.navLink} has-hover`
      }
    >
      {label}
    </NavLink>
  );
}
