import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import UnsplashService from "../../services/unsplashService.js";
import SpinnerIcon from "../../assets/icons/spinner.svg?react";
import ArrowRightIcon from "../../assets/icons/arrow-right.svg?react";

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
        setImages([]);
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
        <p>Loading gallery...</p>
        <SpinnerIcon className={styles.spinnerIcon} />
      </div>
    );
  }

  if (images.length < 1 || images == undefined) {
    return (
      <div className={styles.loadingContainer}>
        <p>Failed to load the images from Unsplash.</p>
      </div>
    );
  }

  return (
    <div className="content">
      <div className={styles.gallery}>
        {images.map((image) => (
          <div key={image.id} className={styles.imageCard}>
            <a
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
            <p className={styles.attribution}>
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

      <a
        href="https://unsplash.com/@jacobasker04"
        target="_blank"
        rel="noopener noreferrer"
        className={`has-hover ${styles.unsplashRedirect}`}
      >
        View Full Gallery on Unsplash
        <ArrowRightIcon className="icon" />
      </a>
    </div>
  );
}
