import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import UnsplashService from "../../services/unsplashService.js";
import SpinnerIcon from "../../assets/icons/spinner.svg?react";
import Link from "../Link.jsx";
import Accordion from "../Accordion.jsx";

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
        if (import.meta.env.DEV) {
          console.error("Error fetching images:", err);
        }
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
        <p>Loading gallery...</p>
      </div>
    );
  }

  if (!loading && images.length < 1) {
    return (
      <div className={styles.loadingContainer}>
        <p>Failed to load the images from Unsplash.</p>
      </div>
    );
  }

  return (
    <>
      <Accordion summary="About the photos">
        <p>
          Photography is one of my biggest passions outside of coding. Browse
          the images below or visit{" "}
          <Link
            className="inline-link"
            href="https://unsplash.com/@jacobasker04"
          >
            my full Unsplash collection
          </Link>{" "}
          to see more.
        </p>
      </Accordion>
      <div className={styles.gallery}>
        {images.map((image) => (
          <div key={image.id} className={styles.imageCard}>
            <Link href={image.links.html}>
              <img
                src={image.urls.small}
                loading="lazy"
                alt={image.alt_description ?? "Unsplash photo"}
              />
            </Link>
          </div>
        ))}
      </div>

      <Link
        href="https://unsplash.com/@jacobasker04"
        className={`${styles.unsplashRedirect} button outline hover-accent`}
      >
        View Full Gallery on Unsplash
      </Link>
    </>
  );
}
