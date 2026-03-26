import styles from "./Status.module.css";

export default function Error({ message }) {
  return (
    <div className={`${styles.statusContainer} ${styles.error}`}>
      <h3>There was an error</h3>
      <p>{message}</p>
    </div>
  );
}
