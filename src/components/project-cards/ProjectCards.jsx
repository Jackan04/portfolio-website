import styles from "./ProjectCards.module.css";
import projects from "../../data/projects";

function Card({ title, description, url }) {
  return (
    <a href={url} className="has-hover">
      <div className={styles.card}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default function ProjectCards() {
  return (
    <ul className={styles.projectList}>
      {projects.map((item, index) => (
        <li key={item.title || index}>
          <Card
            title={item.title}
            description={item.description}
            url={item.url}
          />
        </li>
      ))}
    </ul>
  );
}
