import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <h2>404 - Page Not Found</h2>
      <p>
        The page you're looking for seems to have wandered off. Don't worry, it
        happens to the best of us!
      </p>
      <NavLink to="/" className="button hover-opacity">
        Take Me Home
      </NavLink>
    </section>
  );
}
