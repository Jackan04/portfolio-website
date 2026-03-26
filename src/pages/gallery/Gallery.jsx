import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import styles from "./Gallery.module.css";
import UnsplashService from "../../services/unsplashService.js";
import Loading from "../../components/status/Loading.jsx";
import Error from "../../components/status/Error.jsx";
import CustomLink from "../../components/CustomLink.jsx";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const { isLoading, error } = useQuery({
    queryKey: ["gallery", page],
    queryFn: async () => {
      const data = await UnsplashService.getAllImages(page);
      setImages((prev) => (page === 1 ? data : [...prev, ...data]));
      
      if (data.length === 0 || data.length < 12) setHasMore(false);
      
      return data;
    },
    staleTime: 1000 * 60 * 5, // cache each page for 5 minutes
  });

  if (isLoading && page === 1) return <Loading />;
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
                alt={image.alt_description}
              />
            </CustomLink>
          </div>
        ))}
      </div>

      {hasMore && (
        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={isLoading}
          className={`hover-opacity ${styles.loadMoreButton}`}
        >
          {isLoading ? "Loading..." : "Load more"}
        </button>
      )}
    </>
  );
}
