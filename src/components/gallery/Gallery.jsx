import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import UnsplashService from "../../services/unsplashService.js";
import Loading from "../loading/Loading.jsx";
import Link from "../Link.jsx";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const data = await UnsplashService.getAllImages(1);
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

  async function handleLoadMore() {
    const nextPage = page + 1;
    const newImages = await UnsplashService.getAllImages(nextPage);

    if (newImages.length === 0 || newImages.length < 12) {
      setHasMore(false);
    }

    setImages((prev) => [...prev, ...newImages]);
    setPage(nextPage);
  }

  if (loading) return <Loading />;

  if (!loading && images.length < 1) {
    return (
      <div className="loading-container">
        <p>Failed to load the images from Unsplash.</p>
      </div>
    );
  }

  return (
    <>
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

      {hasMore && (
        <button
          disabled={!hasMore}
          onClick={handleLoadMore}
          className={`hover-opacity ${styles.loadMoreButton}`}
        >
          Load More
        </button>
      )}
    </>
  );
}
