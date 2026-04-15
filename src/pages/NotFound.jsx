import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <h2>404 - Page Not Found</h2>
      <p> The page you’re looking for doesn’t exist</p>
      <div className="hstack gap-sm">
        <NavLink to="/" className="button hover-invert">
          Go home
        </NavLink>
        <NavLink to="/projects" className="button outline hover-invert">
          Browse projects
        </NavLink>
      </div>
    </section>
  );
}
