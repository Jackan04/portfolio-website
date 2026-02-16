import { useState, useEffect } from "react";
import styles from "./ScrollToTop.module.css";
import ArrowUpIcon from "../../assets/icons/arrow-up.svg?react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (isVisible) {
    return (
      <button className={styles.button} onClick={scrollToTop}>
      <ArrowUpIcon />
      </button>
    );
  }
}
