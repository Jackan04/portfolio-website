import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import UnsplashService from "../../services/unsplashService.js";
import SpinnerIcon from "../../assets/icons/spinner.svg?react";

export default function Gallery() {
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
        <SpinnerIcon className={styles.spinnerIcon} />
      </div>
    );
  }

  return (
    <div className={styles.gallery}>
      {images.map((image) => (
        <div className={styles.imageCard}>
          <a
            key={image.id}
            href={image.links.html}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image.urls.regular}
              loading="lazy"
              alt={image.alt_description}
            />
          </a>
          <p className={styles.attribution} key={image.id}>
            Photo by{" "}
            <a
              href={image.user.links.html}
              target="_blank"
              rel="noopener noreferrer"
              className="has-hover"
            >
              {image.user.name}
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com/"
              className="has-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              Unsplash
            </a>{" "}
          </p>
        </div>
      ))}
    </div>
  );
}
