import { useEffect, useState } from "react";
import styles from "./ImageGallery.module.css";
import UnsplashService from "../../services/unsplashService.js";
import SpinnerIcon from "../../assets/icons/spinner.svg?react";

export default function ImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const data = await UnsplashService.getAllImages();
        setImages(data);
      } catch (err) {
        console.error("Error fetching images:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <SpinnerIcon className={styles.spinnerIcon}></SpinnerIcon>
      </div>
    );
  }

  return (
    <div className={styles.gallery}>
      {images.map((image) => {
        return (
          <a href={image.links.html} target="_blank">
            <img
              src={image.urls.regular}
              loading="lazy"
              alt={image.alt_description}
            ></img>
          </a>
        );
      })}
    </div>
  );
}
