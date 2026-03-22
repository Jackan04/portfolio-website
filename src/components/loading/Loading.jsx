import SpinnerIcon from "../../assets/icons/spinner.svg?react";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <SpinnerIcon className={styles.spinnerIcon} />
      <p>Loading...</p>
    </div>
  );
}
