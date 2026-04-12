import SpinnerIcon from "../../assets/icons/spinner.svg?react";
import styles from "./Status.module.css";

export default function Loading() {
  return (
    <div className={`${styles.statusContainer} hstack gap-sm`}>
      <SpinnerIcon className={styles.spinnerIcon} />
      <p>Loading...</p>
    </div>
  );
}
