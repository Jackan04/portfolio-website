import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function CustomNavLink({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
      }
    >
      {label}
    </NavLink>
  );
}
