import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import UnsplashService from "../../services/unsplashService.js";
import SpinnerIcon from "../../assets/icons/spinner.svg?react";
import ArrowRightIcon from "../../assets/icons/arrow-right.svg?react";
import Link from "../Link.jsx";

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
    <>
      <div className={styles.gallery}>
        {images.map((image) => (
          <div key={image.id} className={styles.imageCard}>
            <Link href={image.links.html} >
              <img
                src={image.urls.small}
                loading="lazy"
                alt={image.alt_description}
              />
            </Link>
          </div>
        ))}
      </div>

      <Link
        href="https://unsplash.com/@jacobasker04"
        
        className={`has-hover ${styles.unsplashRedirect}`}
      >
        View Full Gallery on Unsplash
        <ArrowRightIcon className="icon" />
      </Link>
    </>
  );
}
