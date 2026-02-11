import { useState } from "react";
import samples from "../../data/unsplash_images_temp.json";
import styles from "./ImageGallery.module.css";

export default function ImageGallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.gallery}>
      {samples.map((image) => {
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
