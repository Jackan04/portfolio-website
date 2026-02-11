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
      {images.map((image, index) => {
        return (
          <a
            key={index}
            href={image.links.html}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image.urls.regular}
              loading="lazy"
              alt={image.alt_description}
            ></img>
            <p className={styles.attribution}>
              Photo by{" "}
              <a href={image.user.links.html} target="_blank">
                {image.user.name}
              </a>{" "}
              on{" "}
              <a href="https://unsplash.com" target="_blank">
                Unsplash
              </a>
            </p>
          </a>
        );
      })}
    </div>
  );
}
