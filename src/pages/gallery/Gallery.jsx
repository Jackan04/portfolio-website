import { useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import UnsplashService from "../../services/unsplashService.js";
import Loading from "../../components/status/Loading.jsx";
import Error from "../../components/status/Error.jsx";
import CustomLink from "../../components/CustomLink.jsx";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ message: "Error message" });
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const data = await UnsplashService.getAllImages(1);
        setImages(data);
      } catch (err) {
        setError(err);
        setImages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  async function handleLoadMore() {
    try {
      const nextPage = page + 1;
      const newImages = await UnsplashService.getAllImages(nextPage);

      if (newImages.length === 0 || newImages.length < 12) {
        setHasMore(false);
      }

      setImages((prev) => [...prev, ...newImages]);
      setPage(nextPage);
    } catch (err) {
      setError(err);
      setHasMore(false);
    }
  }

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return (
    <>
      <div className={styles.gallery}>
        {images.map((image) => (
          <div key={image.id} className={styles.imageCard}>
            <CustomLink href={image.links.html}>
              <img
                src={image.urls.small}
                loading="lazy"
                alt={image.alt_description ?? "Unsplash photo"}
              />
            </CustomLink>
          </div>
        ))}
      </div>

      {hasMore && (
        <button
          disabled={!hasMore}
          onClick={handleLoadMore}
          className={`hover-opacity ${styles.loadMoreButton}`}
        >
          Load more
        </button>
      )}
    </>
  );
}
