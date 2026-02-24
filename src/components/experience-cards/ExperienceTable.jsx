import styles from "./ExperienceTable.module.css";
import experiences from "../../data/experiences.js";

export default function ExperienceTable() {
  return (
    <div className={styles.tableWrap}>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Toolkit</th>
          </tr>
        </thead>
        <tbody>
          {experiences.map((item, index) => (
            <tr key={index}>
              <td>
                <strong>{item.category}</strong>
              </td>
              <td>{item.toolset}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
